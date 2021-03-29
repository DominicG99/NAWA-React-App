import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const LocationContext = createContext();
function LocationContextProvider(props) {
  const [location, setLocation] = useState(undefined);
  async function getLocation() {
    const locationRes = await axios.get(
      "http://localhost:5000/api/users/loggedIn"
    );
    setLocation(locationRes.data);
  }

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <LocationContext.Provider value={{ location, getLocation }}>
      {props.children}
    </LocationContext.Provider>
  );
}
export default LocationContext;
export { LocationContextProvider };
