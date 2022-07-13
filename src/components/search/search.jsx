import { useStore } from "effector-react";
import { useState } from "react";
import { $isLoading, fetchWeatherByCity } from "../../modals/weather";
import Loader from "../loader/loader";
import { SearchButton, SearchForm, SearchInput, SearchWrapper } from "./styles";

const Search = () => {
  const [value, setValue] = useState("");
  const isLoading = useStore($isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("add ", value);
    fetchWeatherByCity(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchWrapper>
        <SearchButton
          className="search__btn"
          aria-label="Поиск"
          title="Поиск"
        />

        <SearchInput
          type="text"
          name="city"
          placeholder="Поиск по городам..."
          value={value}
          onChange={handleChange}
        />
        {isLoading && <Loader />}
      </SearchWrapper>
    </SearchForm>
  );
};

export default Search;
