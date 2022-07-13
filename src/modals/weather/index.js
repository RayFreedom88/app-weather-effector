import { createStore, createEvent, createEffect } from "effector";
import { attach } from "effector";
import { API_KEY, URL_API } from "../../utils/const";

export const $url = createStore(URL_API); // стор для url
export const $city = createStore({}); // стор для данных одного города

// эффект для POST запроса
export const fetchFx = createEffect(async (url) => {
  const res = await fetch(url, {
    method: "POST"
  });

  return res.json();
});

// запрос данных погоды по одному городу
export const fetchWeatherByCity = attach({
  effect: fetchFx,
  source: $url,
  mapParams: (params, source) =>
    `${source}weather?q=${params}&lang=ru&APPID=${API_KEY}`
});

export const $cities = createStore([]); // стор для хранения данных городов

export const addCitiesEvent = createEvent("событие добавления городов");
export const deleteCityEvent = createEvent(
  "событие удаления города из $cities"
);

export const updateCitiesEvent = createEvent("событие обновления городов");

export const $isLoading = createStore(false);
