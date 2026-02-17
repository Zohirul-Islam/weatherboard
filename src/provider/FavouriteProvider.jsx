import { FavouriteContext } from "../context"
import { useLocalStorage } from "../hooks"

const FavouriteProvider = ({children}) => {
    const [favourites, setFavourites] = useLocalStorage("favourites", []);

    const addToFavourite = (latitude, longitude, location) => {
         if (!latitude || !longitude || !location) return;
        setFavourites([...favourites,{latitude,longitude,location}])
    }
    const removeFavourite = (location) => {
        const restFavourites = favourites.filter((fav) => fav.location !== location);
        setFavourites(restFavourites);
    }
    return <FavouriteContext.Provider value={{favourites,addToFavourite,removeFavourite}}>
        {
            children
        }
    </FavouriteContext.Provider>
}

export default FavouriteProvider