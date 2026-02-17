import React, { useContext, useEffect, useState } from 'react';
import heartIcon from '../../assets/heart.svg'
import { FavouriteContext, WeatherContext } from '../../context';
import redheartIcon  from '../../assets/heart-red.svg'
const AddToFavourite = () => {
  const [isFavourite, toggleFavourite] = useState(false);
  const { favourites, addToFavourite, removeFavourite } = useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourite(latitude,longitude,location)
    } else {
      removeFavourite(location);
    }
    toggleFavourite(!isFavourite)
  }
  useEffect(() => {
    const found = favourites.find((fav) => fav.location == location);
    toggleFavourite(found);
  },[])
  
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button onClick={handleFavourite} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favourite</span>
          {
            isFavourite ? (<img src={redheartIcon} alt="" />):(<img src={heartIcon} alt="" />)
          }
          
        </button>
      </div>
    </div>
  );
};

export default React.memo(AddToFavourite);
