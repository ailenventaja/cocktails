import React, { useState, useEffect } from "react";
import Gallery from "../../components/Gallery";

export default function Ingredients() {
  const [favoritesListExists, setFavoritesListExists] = useState(false);
  var favoritesList = JSON.parse(localStorage.getItem("favorites"));
  useEffect(() => {
    checkFavorites();
  }, [setFavoritesListExists]);
  const checkFavorites = () => {
    var favoritesList = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesList && favoritesList.length > 0) {
      setFavoritesListExists(true);
    } else {
      setFavoritesListExists(false);
    }
  };

  return favoritesListExists ? (
    <Gallery drinks={favoritesList} fromFavorites={true} />
  ) : (
    <div>Aún sin favoritos</div>
  );
}
