import { useContext, useEffect, useState } from 'react';
import searchIcon from '../../assets/search.svg'
import { LocationContext, WeatherContext } from '../../context';

const Search = () => {
  const [query, setQuery] = useState("");
  
  const {fetchLocationByName,selectedLocation } = useContext(LocationContext);
  const handleSearch = (e) => {
    e.preventDefault();
    fetchLocationByName(query);
  }
  console.log(selectedLocation)
  

  return (
    <form action="#" onSubmit={handleSearch}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          value={query}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={(e)=>setQuery(e.target.value)}
        />
        <button type="submit" >
          <img src={searchIcon} />
        </button>
      </div>
    </form>
  );
};

export default Search;
