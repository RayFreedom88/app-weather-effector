import { useRef } from "react";
import {
  CardArticle,
  CardCol,
  CardContent,
  CardDelete,
  CardImg,
  CardRow,
  CardSpan
} from "./styles";

const Card = ({
  city,
  time,
  temperature,
  conditions,
  img,
  tempMax,
  tempMin,
  onDelete
}) => {
  const getTemp = (temp) => Math.round(temp - 273);
  const getImg = (image) => `https://openweathermap.org/img/wn/${image}@2x.png`;
  const ref = useRef();

  const handleCardClick = () => {
    console.log("Click delete ", ref.current.innerHTML);
    onDelete(ref.current.innerHTML);
  };

  const animationConfig = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

  if (city === "Ошибка 429")
    return (
      <CardArticle
        variants={animationConfig}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CardContent>
          <CardRow>
            <CardCol>
              <CardSpan fontSize="40px" ref={ref}>
                {city}
              </CardSpan>
              <p>API-ключ OpenWeatherMap заблокирован!</p>
            </CardCol>
          </CardRow>

          <CardRow>
            <CardDelete onClick={handleCardClick}>x</CardDelete>
          </CardRow>
        </CardContent>
      </CardArticle>
    );

  return (
    <CardArticle
      variants={animationConfig}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <CardContent>
        <CardRow>
          <CardCol>
            <CardSpan fontSize="18px" ref={ref}>
              {city}
            </CardSpan>
          </CardCol>
          <CardSpan fontSize="48px">{getTemp(temperature)}°</CardSpan>
        </CardRow>

        <CardRow>
          <CardCol justify="flex-end">
            <CardSpan fontSize="14px">{conditions}</CardSpan>
            <CardSpan fontSize="14px">
              Макс.: {getTemp(tempMax)}°, мин.: {getTemp(tempMin)}°
            </CardSpan>
          </CardCol>

          <CardImg src={getImg(img)} alt={conditions} />
          <CardDelete onClick={handleCardClick}>x</CardDelete>
        </CardRow>
      </CardContent>
    </CardArticle>
  );
};

export default Card;
