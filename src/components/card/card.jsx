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
    console.log("delete ", ref.current.innerHTML);
    onDelete(ref.current.innerHTML);
  };

  return (
    <CardArticle>
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
