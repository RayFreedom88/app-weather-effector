import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  margin: 20px auto;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  gap: 8px;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 16px;
  background-color: #ffffff;

  &:focus-within button {
    background-color: #050510;
  }
`;

export const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  mask-position: center;
  mask-repeat: no-repeat;
  background-color: #c3c3c6;

  -webkit-mask-image: url(https://raw.githubusercontent.com/RayFreedom88/app-weather/0271b436588a75b0a056b384e6b928595b6cbff3/img/search.svg);
  mask-image: url(https://raw.githubusercontent.com/RayFreedom88/app-weather/0271b436588a75b0a056b384e6b928595b6cbff3/img/search.svg);
  -webkit-mask-size: 20px;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 20px;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: transparent;
  font-family: "Raleway", sans-serif;
`;
