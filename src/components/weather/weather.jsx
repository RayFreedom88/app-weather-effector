import { useStore } from 'effector-react';
import { AnimatePresence } from 'framer-motion';
import { $cities, cityDeleted } from '../../models/model';
import Card from '../card/card';
import Search from '../search/search';
import {
  WeatherContent,
  WeatherScroll,
  WeatherScrollWrap,
  WeatherSection,
  WeatherTitle,
  WeatherWrapper,
} from './styles';

const Weather = () => {
  const citiesState = useStore($cities);

  return (
    <WeatherSection>
      <WeatherWrapper>
        <WeatherContent>
          <WeatherTitle>Погода</WeatherTitle>
          <Search />

          <WeatherScroll>
            <WeatherScrollWrap>
              <AnimatePresence>
                {citiesState.length > 0 &&
                  citiesState.map((city) => (
                    <Card
                      city={city.name}
                      temperature={city.main.temp}
                      conditions={city.weather[0].description}
                      img={city.weather[0].icon}
                      tempMax={city.main.temp_max}
                      tempMin={city.main.temp_min}
                      key={city.id}
                      onDelete={cityDeleted}
                    />
                  ))}
              </AnimatePresence>
              {citiesState.length === 0 && <p>Добавьте город</p>}
            </WeatherScrollWrap>
          </WeatherScroll>
        </WeatherContent>
      </WeatherWrapper>
    </WeatherSection>
  );
};

export default Weather;
