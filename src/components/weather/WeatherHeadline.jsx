import React, { useContext } from 'react';
import cloudicon from '../../assets/icons/cloud.svg'
import picicon from '../../assets/pin.svg'
import { WeatherContext } from '../../context';
import { formatedData } from '../../utils/date-utils';
const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData)
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={cloudicon} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(weatherData.temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={picicon} />
            <h2 className="text-2xl lg:text-[50px]">{ weatherData.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">{formatedData(weatherData.time, 'time', false)}-{formatedData(weatherData.time, 'date', false) }</p>
    </div>
  );
};

export default React.memo(WeatherHeadline);
