import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  Children,
} from "react";

import { itemRequest, itemTransform } from "./items.service";

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      itemRequest()
        .then(itemTransform)
        .then((results) => {
          setIsLoading(false);
          setItems(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveItems();
  }, []);
  return (
    <ItemContext.Provider
      value={{
        items,
        isLoading,
        error,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
