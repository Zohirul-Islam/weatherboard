import React, { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";
import clearSky from './assets/backgrounds/clear-sky.jpg';
import fewClouds from './assets/backgrounds/few-clouds.jpg';
import mist from './assets/backgrounds/mist.jpeg';
import rainy from './assets/backgrounds/rainy-day.jpg';
import scattered from './assets/backgrounds/scattered-clouds.jpg';
import shower from './assets/backgrounds/shower-rain.jpg';
import snow from './assets/backgrounds/snow.jpg';
import sunny from './assets/backgrounds/sunny.jpg';
import thunder from './assets/backgrounds/thunderstorm.jpg';
import winter from './assets/backgrounds/winter.jpg';

const Page = () => {
    const { loading, weatherData } = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState('');
    function getbackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return rainy;
            case 'Clouds':
                return scattered
            case 'Clear':
                return clearSky
            case "Snow":
                return snow
            case "Thunder":
                return thunder
            case "Fog":
                return winter
            case "Haze":
                return fewClouds
            case "Mist":
                return mist
            default:
                return clearSky
        }
    }

    useEffect(() => {
        const bgImage = getbackgroundImage(weatherData.climate);
        setClimateImage(bgImage);
    },[weatherData.climate])
  return (
    <>
      {loading.state ? (
              <div><p>{ loading.message}</p></div>
      ) : (
        <div style={{backgroundImage:`url(${climateImage})`}} className="grid place-items-center h-screen bg-no-repeat bg-cover">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
