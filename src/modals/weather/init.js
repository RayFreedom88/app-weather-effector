import { mockDataError } from "../../utils/const";
import {
  getLocalStorage,
  saveLocalStorage,
  removeSearches,
} from "../../utils/local-storage";
import {
  $cities,
  $city,
  addCitiesEvent,
  deleteCityEvent,
  fetchFx,
  $isLoading,
} from "./index";

// fetchFx.doneData.watch((data) => {
//   console.log("fetchFx: ", data);
// });

// вариант 2
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
      "API-ключ OpenWeatherMap заблокирован из-за превышения количества запросов в минуту. В бесплатной учетной записи количество запросов составляет 60 запросов в минуту! Замените API_KEY или попробуйте воспользоваьтся приложением на следующий день. И очистите local storage, чтобы при первом запуске приложения была довалена карточка с погодой города Москва ибо кнопку сброса я еще не успел доделать либо так задумывалось ;)"
    );
    removeSearches();
    saveLocalStorage(mockDataError);
    return dataCity;
  }
});

$cities
  .on(addCitiesEvent, (_, dataCities) => dataCities)
  .on(deleteCityEvent, (state, deleteCity) => {
    const newState = state.filter((city) => city.name !== deleteCity);
    const newStateString = JSON.stringify([...newState]);
    removeSearches();
    localStorage.setItem("cities", newStateString);
  });

$isLoading.on(fetchFx.pending, (_, isPending) => isPending);
