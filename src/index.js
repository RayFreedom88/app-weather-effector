import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import GlobalStyles from "./styles/global";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
