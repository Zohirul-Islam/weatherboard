import React, { useContext } from "react";
import cloudicon from "../../assets/icons/cloud.svg";
import snowIcon from "../../assets/icons/snow.svg";
import sunnyIcon from "../../assets/icons/sunny.svg";
import hazeIcon from "../../assets/haze.svg";
import rainyIcon from "../../assets/rainy.svg";
import thunderIcon from "../../assets/thunder.svg";
import picicon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { formatedData } from "../../utils/date-utils";
const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return rainyIcon;
      case "Clouds":
        return cloudicon;
      case "Clear":
        return sunnyIcon;
      case "Snow":
        return snowIcon;
      case "Thunder":
        return thunderIcon;
      case "Fog":
        return hazeIcon;
      case "Haze":
        return hazeIcon;
      default:
        return sunnyIcon
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(weatherData.climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(weatherData.temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={picicon} />
            <h2 className="text-2xl lg:text-[50px]">{weatherData.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {formatedData(weatherData.time, "time", false)}-
        {formatedData(weatherData.time, "date", false)}
      </p>
    </div>
  );
};

export default React.memo(WeatherHeadline);
