import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Raleway", sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;

    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #2f2f37;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff6053;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  .weather-scroll-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 270px;
    height: 100%;
    background: inherit;
  }
`;
