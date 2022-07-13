import { useStore } from "effector-react";
import { useEffect } from "react";
import {
  $cities,
  addCitiesEvent,
  deleteCityEvent,
  fetchWeatherByCity
} from "../../modals/weather";
import { getLocalStorage, removeSearches } from "../../utils/local-storage";
import Card from "../card/card";
import Search from "../search/search";
import {
  WeatherContent,
  WeatherScroll,
  WeatherScrollWrap,
  WeatherSection,
  WeatherTitle,
  WeatherWrapper
} from "./styles";

const Weather = () => {
  const citiesState = useStore($cities);

  useEffect(() => {
    if (!localStorage.cities) fetchWeatherByCity("москва");
    addCitiesEvent(getLocalStorage());
  }, [citiesState]);

  useEffect(() => {
    // обновление данных через каждые 60 секунд
    const update = setInterval(() => {
      console.log("update");
      const citiesToUpdate = [];
      getLocalStorage().map((item) => citiesToUpdate.push(item.name));
      removeSearches();
      citiesToUpdate.map((item) => fetchWeatherByCity(item));
    }, 60000);
    return () => clearInterval(update);
  }, []);

  return (
    <WeatherSection>
      <WeatherWrapper>
        <WeatherContent>
          <WeatherTitle>Погода</WeatherTitle>
          <Search />

          <WeatherScroll>
            <WeatherScrollWrap>
              {citiesState.length > 0 ? (
                citiesState.map((city) => (
                  <Card
                    city={city.name}
                    temperature={city.main.temp}
                    conditions={city.weather[0].description}
                    img={city.weather[0].icon}
                    tempMax={city.main.temp_max}
                    tempMin={city.main.temp_min}
                    key={city.id}
                    onDelete={deleteCityEvent}
                  />
                ))
              ) : (
                <p>Добавьте город</p>
              )}
            </WeatherScrollWrap>
          </WeatherScroll>
        </WeatherContent>
      </WeatherWrapper>
    </WeatherSection>
  );
};

export default Weather;
