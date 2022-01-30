import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Gallery from "../../components/Gallery";
import "./styles.scss";

export default function Ingredients() {
  const [favoritesListExists, setFavoritesListExists] = useState(false);
  var favoritesList = JSON.parse(localStorage.getItem("favorites"));
  useEffect(() => {
    checkFavorites();
  }, []);
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
    <>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{ textAlign: "center", color: "primary.main" }}
      >
        ADD FAVORITES
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ textAlign: "center", color: "primary.main" }}
      >
        You'll see your fave drinks here!
      </Typography>

      <div className="without-favorites-image">
        <img src={require("../../assets/images/without-favorites.jpg")}></img>
      </div>
    </>
  );
}
