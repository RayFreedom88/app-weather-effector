export const URL_API = 'https://api.openweathermap.org/data/2.5/';
export const API_KEY = 'd7bf260fb0f276e0731eb04e214d5cda';
export const DEFAULT_CITY = 'москва';

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
