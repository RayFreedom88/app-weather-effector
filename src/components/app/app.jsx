import Weather from "../weather/weather";
import "../../models/init";
import { AppWrapper } from "./styles";

const App = () => {
  return (
    <AppWrapper>
      <main>
        <h1 className="visually-hidden">Прогноз погоды</h1>

        <Weather />
      </main>
    </AppWrapper>
  );
};

export default App;
