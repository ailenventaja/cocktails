import React, { useState, useCallback } from "react";

const FavoritesContext = React.createContext({ favorites: [] });

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = useCallback(
    (favorite) => setFavorites((current) => [...current, favorite]),
    [setFavorites]
  );

  return (
    <FavoritesContext.Provider value={{ favorites, add }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
