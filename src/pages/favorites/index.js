import React from "react";
import Gallery from "../../components/Gallery";

export default function Ingredients() {
  var favoritesList = JSON.parse(localStorage.getItem("favorites"));

  return <Gallery drinks={favoritesList} fromFavorites={true} />;
}
