import {
  attach,
  createStore,
  createEvent,
  createEffect,
  sample,
} from 'effector';
import { mockDataError } from '../utils/const';
import {
  getLocalStorage,
  saveLocalStorage,
  removeSearches,
} from '../utils/local-storage';
import { URL_API, API_KEY, DEFAULT_CITY } from '../utils/const';
import { interval } from 'patronum';

export const fetchFx = createEffect(async (url) => {
  const res = await fetch(url, {
    method: 'POST',
  });

  return res.json();
});

export const appStarted = createEvent('собатие запуска приложения');
export const citiesChanged = createEvent('событие изменения городов');
export const cityDeleted = createEvent('событие удаления города из $cities');
export const citiesUpdated = createEvent('событие обновления городов');

export const $url = createStore(URL_API);
export const $city = createStore({});
export const $cities = createStore([]);
export const $isLoading = createStore(false);

// запрос данных погоды по одному городу
export const fetchWeatherByCity = attach({
  effect: fetchFx,
  source: $url,
  mapParams: (params, source) =>
    `${source}weather?q=${params}&lang=ru&APPID=${API_KEY}`,
});

sample({
  clock: appStarted,
  filter: () => !localStorage.cities,
  fn: () => DEFAULT_CITY,
  target: fetchWeatherByCity,
});

sample({
  clock: appStarted,
  filter: () => localStorage.cities !== 0,
  fn: () => getLocalStorage(),
  target: citiesChanged,
});

sample({
  clock: fetchFx.doneData,
  fn: () => getLocalStorage(),
  target: citiesChanged,
});

const { tick } = interval({
  timeout: 60000,
  start: appStarted,
});

/**
 * Обнавляет данные погоды всех городов
 */
tick.watch(() => {
  const citiesToUpdate = [];
  getLocalStorage().map((item) => citiesToUpdate.push(item.name));
  removeSearches();
  citiesToUpdate.map((item) => fetchWeatherByCity(item));
});

$city.on(fetchFx.doneData, (_, dataCity) => {
  const localCities = getLocalStorage();

  if (localCities.length === 0 && dataCity.name) {
    saveLocalStorage(dataCity);
    return dataCity;
  }

  if (localCities.find((item) => item.name === dataCity.name)) {
    return dataCity;
  }

  if (dataCity.name) {
    saveLocalStorage(dataCity);
    return dataCity;
  }

  if (dataCity.code === 429) {
    console.log(
      'API-ключ OpenWeatherMap заблокирован из-за превышения количества запросов в минуту. В бесплатной учетной записи количество запросов составляет 60 запросов в минуту! Замените API_KEY или попробуйте воспользоваьтся приложением на следующий день. И очистите local storage, чтобы при первом запуске приложения была довалена карточка с погодой города Москва ибо кнопку сброса я еще не успел доделать либо так задумывалось ;)'
    );
    removeSearches();
    saveLocalStorage(mockDataError);
    return dataCity;
  }
});

$cities
  .on(citiesChanged, (_, dataCities) => dataCities)
  .on(cityDeleted, (state, deleteCity) => {
    const newState = state.filter((city) => city.name !== deleteCity);
    const newStateString = JSON.stringify([...newState]);
    removeSearches();
    localStorage.setItem('cities', newStateString);

    return newState;
  });

$isLoading.on(fetchFx.pending, (_, isPending) => isPending);
