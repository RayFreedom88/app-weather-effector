import {
  getLocalStorage,
  saveLocalStorage,
  removeSearches
} from "../../utils/local-storage";
import {
  $cities,
  $city,
  updateCitiesEvent,
  addCitiesEvent,
  deleteCityEvent,
  fetchFx,
  $isLoading
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
