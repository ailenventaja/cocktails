import React, { useState } from "react";
import { Paper } from "@mui/material";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import paths from "../../config/paths";
import "./style.scss";

export default function Gallery(props) {
  const navigate = useNavigate();

  const drinks = props.drinks;
  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update the state to force render
  }

  if (props.fromFavorites) {
    var xs = "500px";
    var xsm = "480px";
    var sm = "420px";
    var lg = "450px";
  } else {
    var xs = "450px";
    var xsm = "430px";
    var sm = "380px";
    var lg = "390px";
  }

  const openDetails = (name) => {
    navigate(paths.DETAILS, {
      state: {
        name: name,
      },
    });
  };
  const forceUpdate = useForceUpdate();
  const handleFavorites = (item) => {
    var favoritesList = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesList.find((x) => x.idDrink === item.idDrink)) {
      const index = favoritesList.findIndex(
        (element) => element.idDrink === item.idDrink
      );
      favoritesList.splice(index, 1);
      if (props.fromFavorites) {
        const index = drinks.findIndex(
          (element) => element.idDrink === item.idDrink
        );
        drinks.splice(index, 1);
      }
    } else {
      var favoriteDrink = new Object();
      favoriteDrink.idDrink = item.idDrink;
      favoriteDrink.strDrink = item.strDrink;
      favoriteDrink.strDrinkThumb = item.strDrinkThumb;
      favoritesList.push(favoriteDrink);
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
    console.log(JSON.parse(localStorage.getItem("favorites")));
    forceUpdate();
  };

  const getTitle = (item) => {
    var favoritesList = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesList.find((x) => x.idDrink === item.idDrink)) {
      return "Remove";
    } else {
      return "Add";
    }
  };

  const getClass = (item) => {
    var favoritesList = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesList.find((x) => x.idDrink === item.idDrink)) {
      return "favorite-gal";
    } else {
      return "no-favorite-gal";
    }
  };
  return (
    <Paper elevation={0} sx={{ pr: "20px", pl: "20px" }}>
      <ImageList
        className="image-grid"
        sx={{ maxHeight: { xs: xs, xsm: xsm, sm: sm, lg: lg } }}
      >
        {drinks.map((item) => (
          <ImageListItem
            key={item.strDrinkThumb}
            className="thumb"
            sx={{ width: "200px" }}
          >
            <Tooltip title={getTitle.call(this, item)}>
              <FavoriteIcon
                id="favorite-icon"
                sx={{ cursor: "pointer" }}
                className={getClass.call(this, item)}
                onClick={() => handleFavorites(item)}
              />
            </Tooltip>
            <img
              src={`${item.strDrinkThumb}?w=200&fit=crop&auto=format`}
              srcSet={`${item.strDrinkThumb}?w=200&fit=crop&auto=format&dpr=2 2x`}
              alt={item.strDrink}
              loading="lazy"
            />
            <ImageListItemBar
              className="info"
              title={item.strDrink}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.strDrink}`}
                  onClick={() => openDetails(item.strDrink)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  );
}
