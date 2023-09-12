export const URL_API = 'https://api.openweathermap.org/data/2.5/';
export const API_KEY = 'd7bf260fb0f276e0731eb04e214d5cda';
export const DEFAULT_CITY = 'москва';

// запасной API_KEY, если вдруг один из ключей заблокиркуют из-за превышения запросов
// export const API_KEY = "1eb5d177c062fccb2758fa557651791d";

export const mockDataError = {
  id: 42,
  weather: [{ description: 'пасмурно' }],
  main: {
    temp: '',
    temp_min: '',
    temp_max: '',
  },
  name: 'Ошибка 429',
};
