import { useEffect, useState } from "react";
import { LocationContext } from "../context";

const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });

  const fetchLocationByName = async (city) => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      console.log(data);
      setSelectedLocation({
        location: data.name,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <LocationContext.Provider
      value={{ selectedLocation, setSelectedLocation, fetchLocationByName }}
    >
      {children}
    </LocationContext.Provider>
  );
};
export default LocationProvider;
