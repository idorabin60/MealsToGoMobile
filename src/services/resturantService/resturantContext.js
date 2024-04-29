import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, resturantCamelizeData } from "./resturantService";
export const ResturantContext = createContext();

export const ResturantContextProvider = ({ children }) => {
  const [resturants, setResturants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retriveResturants = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("bls");
      restaurantsRequest()
        .then(resturantCamelizeData)
        .then((resturantsData) => {
          setResturants(resturantsData);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 25000);
  };
  useEffect(() => {
    retriveResturants();
  }, []);
  return (
    <ResturantContext.Provider
      value={{ resturants: resturants, isLoading: isLoading, error: error }}
    >
      {children}
    </ResturantContext.Provider>
  );
};
