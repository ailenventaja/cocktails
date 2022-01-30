import React, { useState, useEffect } from "react";
import Glass from "@mui/icons-material/LocalBarTwoTone";
import Alcohol from "@mui/icons-material/LiquorTwoTone";
import Category from "@mui/icons-material/CategoryTwoTone";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Paper,
  Grid,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Item } from "../Item";
import paths from "../../config/paths";
import "./style.scss";

export default function CocktailDetails(props) {
  const [iconClass, setIconClass] = useState("");
  const [title, setTitle] = useState("");
  const drink = props.drinks[0];
  const navigate = useNavigate();
  const searchIngredient = (ingredient) => {
    navigate(paths.INGREDIENTS, {
      state: {
        ingredient: ingredient,
      },
    });
  };
  const search = (element) => element.idDrink === drink.idDrink;

  useEffect(() => {
    checkClass();
  }, []);
  const checkClass = () => {
    var favoritesList = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesList) {
      if (favoritesList.find((x) => x.idDrink === drink.idDrink)) {
        setIconClass("favorite");
        setTitle("Remove");
      } else {
        setIconClass("no-favorite");
        setTitle("Add");
      }
    } else {
      setIconClass("no-favorite");
      setTitle("Add");
    }
  };
  const handleFavorites = () => {
    var favoritesList = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesList) {
      if (favoritesList.find((x) => x.idDrink === drink.idDrink)) {
        const index = favoritesList.findIndex(search);
        favoritesList.splice(index, 1);
        setIconClass("no-favorite");
        setTitle("Add");
      } else {
        var favoriteDrink = new Object();
        favoriteDrink.idDrink = drink.idDrink;
        favoriteDrink.strDrink = drink.strDrink;
        favoriteDrink.strDrinkThumb = drink.strDrinkThumb;
        favoritesList.push(favoriteDrink);
        setIconClass("favorite");
        setTitle("Remove  ");
      }
    } else {
      var favoriteDrink = new Object();
      favoriteDrink.idDrink = drink.idDrink;
      favoriteDrink.strDrink = drink.strDrink;
      favoriteDrink.strDrinkThumb = drink.strDrinkThumb;
      var favoritesList = [];
      favoritesList.push(favoriteDrink);
      setIconClass("favorite");
      setTitle("Remove  ");
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
  };

  return (
    <>
      {drink && (
        <Paper elevation={0} sx={{ pr: "20px", pl: "20px" }}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={4} xl={4} sx={{ textAlign: "center" }}>
              <h1 className="titleH1">{drink.strDrink}</h1>
              <div className="ingredients">
                <Stack
                  direction={{ xs: "row", md: "column" }}
                  spacing={2}
                  className="ingredients-section"
                  sx={{
                    alignItems: "center",
                  }}
                >
                  {drink.strIngredient1 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient1)}
                    >
                      {drink.strIngredient1} {drink.strMeasure1}
                    </Item>
                  )}
                  {drink.strIngredient2 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient2)}
                    >
                      {drink.strIngredient2} {drink.strMeasure2}
                    </Item>
                  )}
                  {drink.strIngredient3 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient3)}
                    >
                      {drink.strIngredient3} {drink.strMeasure3}
                    </Item>
                  )}
                  {drink.strIngredient4 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient4)}
                    >
                      {drink.strIngredient4} {drink.strMeasure4}
                    </Item>
                  )}
                  {drink.strIngredient5 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient5)}
                    >
                      {drink.strIngredient5} {drink.strMeasure5}
                    </Item>
                  )}
                  {drink.strIngredient6 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient6)}
                    >
                      {drink.strIngredient6} {drink.strMeasure6}
                    </Item>
                  )}
                  {drink.strIngredient7 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient7)}
                    >
                      {drink.strIngredient7} {drink.strMeasure7}
                    </Item>
                  )}
                  {drink.strIngredient8 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient8)}
                    >
                      {drink.strIngredient8} {drink.strMeasure8}
                    </Item>
                  )}
                  {drink.strIngredient9 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient9)}
                    >
                      {drink.strIngredient9} {drink.strMeasure9}
                    </Item>
                  )}
                  {drink.strIngredient10 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient10)}
                    >
                      {drink.strIngredient10} {drink.strMeasure10}
                    </Item>
                  )}
                  {drink.strIngredient11 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient11)}
                    >
                      {drink.strIngredient11} {drink.strMeasure11}
                    </Item>
                  )}
                  {drink.strIngredient12 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient12)}
                    >
                      {drink.strIngredient12} {drink.strMeasure12}
                    </Item>
                  )}
                  {drink.strIngredient13 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient13)}
                    >
                      {drink.strIngredient13} {drink.strMeasure13}
                    </Item>
                  )}
                  {drink.strIngredient14 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient14)}
                    >
                      {drink.strIngredient14} {drink.strMeasure14}
                    </Item>
                  )}
                  {drink.strIngredient15 && (
                    <Item
                      onClick={() => searchIngredient(drink.strIngredient15)}
                    >
                      {drink.strIngredient15} {drink.strMeasure15}
                    </Item>
                  )}
                </Stack>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              xl={4}
              sx={{
                textAlign: "center",
                mt: "6px",
                verticalAlign: "center",
              }}
            >
              <h2 className="titleH2">Instructions</h2>
              <div className="section">{drink.strInstructions}</div>
              <List sx={{ mt: "20px" }} className="characteristics">
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Category className="icon" />
                  </ListItemIcon>
                  <ListItemText className="text" primary={drink.strCategory} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Alcohol className="icon" />
                  </ListItemIcon>
                  <ListItemText className="text" primary={drink.strAlcoholic} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Glass className="icon" />
                  </ListItemIcon>
                  <ListItemText className="text" primary={drink.strGlass} />
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              xl={4}
              sx={{
                textAlign: { xs: "center", xl: "end" },
                pb: { xs: "15px" },
              }}
            >
              <div className="container">
                <Tooltip title={title}>
                  <FavoriteIcon
                    sx={{ cursor: "pointer" }}
                    className={iconClass}
                    onClick={handleFavorites}
                  />
                </Tooltip>
                <img src={drink.strDrinkThumb} className="image"></img>{" "}
              </div>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
}
