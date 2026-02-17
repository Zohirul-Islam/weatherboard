import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    latitude: "",
    longitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const { selectedLocation } = useContext(LocationContext);

  const [error, setError] = useState(null);
  const fetchWeatherData = async (lat, lon) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Weather Data....",
      });
      /* ToDo-make the fetch call */
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
      );
      if (!response.ok) {
        const errorMessage = "Fetching Weather Data failed !";
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        latitude: lat,
        longitude: lon,
      };
      setWeatherData(updateWeatherData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location...",
    });
      /* conditionally call for serch */
      if (selectedLocation.latitude && selectedLocation.longitude) {
          fetchWeatherData(selectedLocation.latitude,selectedLocation.longitude)
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
      }

      /* .................. */
  }, [selectedLocation.latitude,selectedLocation.longitude]);
  return {
    weatherData,
    loading,
    error,
  };
};
export default useWeather;
