import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import { useEventContext } from "../context/EventContext";

const SearchBar = () => {

  const { setEvents, selectedCity, setSelectedCity} = useEventContext();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const [showStates, setShowStates] = useState(false);
  const [showCities, setShowCities] = useState(false);

  const fetchEvents = async () => {
    try{
      const res = await axios.get(
      `https://eventdata.onrender.com/events?state=${selectedState}&city=${selectedCity}`
    );
    setEvents(res.data);
    }
    catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCity = async () => {
      if (!selectedState) return;

      try {
        const res = await axios.get(
          `https://eventdata.onrender.com/cities/${selectedState}`
        );
        setCities(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCity();
  }, [selectedState]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const eve = await axios.get(`https://eventdata.onrender.com/events?state=Texas&city=Austin`);
        setEvents(eve.data);
        const res = await axios.get(
          "https://eventdata.onrender.com/states"
        );
        setStates(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStates();
  }, []);

  return (
    <div className="search-container">
      <div className="filters">
        {/* STATE DROPDOWN */}
        <div
          id="state"
          className="dropdown"
          onClick={() => setShowStates(!showStates)}
        >
          <span>
            {selectedState || "Select State"}
          </span>

          {showStates && (
            <ul className="dropdown-menu">
              {states.map((state) => (
                <li
                  key={state}
                  onClick={() => {
                    setSelectedState(state);
                    setSelectedCity("");
                    setShowStates(false);
                  }}
                >
                  {state}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CITY DROPDOWN */}
        <div
          id="city"
          className="dropdown"
          onClick={() => selectedState && setShowCities(!showCities)}
        >
          <span>
            {selectedCity || "Select City"}
          </span>

          {showCities && (
            <ul className="dropdown-menu">
              {cities.map((city) => (
                <li
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setShowCities(false);
                  }}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button id="searchBtn" onClick={fetchEvents}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
