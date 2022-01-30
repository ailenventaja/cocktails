import React, { useEffect, useState } from "react";
import SearchField from "react-search-field";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { useIngredients } from "./hook";
import Loader from "../../components/Loader";
import Gallery from "../../components/Gallery";
import { Item } from "../../components/Item";
import "../../styles/pre-searchers.scss";

export default function Ingredients() {
  const { state } = useLocation();
  if (state) {
    var { ingredient } = state;
  }
  window.history.replaceState(null, "");

  const { getByIngredient, loading, data } = useIngredients();
  const [ingredientName, setIngredientName] = useState(
    ingredient ? ingredient : ""
  );
  const { drinks } = data ? data : [];

  const searchByIngredient = (event) => {
    setIngredientName(event);
    getByIngredient(event);
  };

  useEffect(async () => {
    await getByIngredient(ingredientName);
  }, []);

  const clean = (event) => {
    if (event === "") setIngredientName("");
  };
  return (
    <>
      <SearchField
        placeholder={ingredientName ? "" : "Search by ingredient"}
        onSearchClick={searchByIngredient}
        searchText={ingredientName ? ingredientName : ""}
        onChange={clean}
      />
      {!data && !loading && (
        <>
          <h2 className="ideas-title">Some Ideas</h2>
          <Grid
            container
            spacing={2}
            sx={{ padding: "10px", textAlign: "center" }}
            className="ideas-list"
          >
            <Grid item xs={6} md={2}>
              <Item onClick={() => searchByIngredient("Red wine")}>
                Red wine
              </Item>
              <Item onClick={() => searchByIngredient("Sugar syrup")}>
                Sugar syrup
              </Item>
              <Item onClick={() => searchByIngredient("Ginger ale")}>
                Ginger ale
              </Item>
              <Item onClick={() => searchByIngredient("Lemon")}>Lemon</Item>
              <Item onClick={() => searchByIngredient("Guinness stout")}>
                Guinness stout
              </Item>
              <Item onClick={() => searchByIngredient("Tequila")}>Tequila</Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item onClick={() => searchByIngredient("Jägermeister")}>
                Jägermeister
              </Item>
              <Item onClick={() => searchByIngredient("Brandy")}>Brandy</Item>
              <Item onClick={() => searchByIngredient("Gin")}>Gin</Item>
              <Item onClick={() => searchByIngredient("Dry Vermouth")}>
                Dry Vermouth
              </Item>
              <Item onClick={() => searchByIngredient("Orange")}>Orange</Item>
              <Item onClick={() => searchByIngredient("Mint")}>Mint</Item>
            </Grid>
            <Grid item md={2} sx={{ display: { xs: "none", md: "block" } }}>
              <Item onClick={() => searchByIngredient("Coffee")}>Coffee</Item>
              <Item onClick={() => searchByIngredient("Vodka")}>Vodka</Item>
              <Item onClick={() => searchByIngredient("Milk")}>Milk</Item>
              <Item onClick={() => searchByIngredient("Cinnamon")}>
                Cinnamon
              </Item>
              <Item onClick={() => searchByIngredient("Banana")}>Banana</Item>
              <Item onClick={() => searchByIngredient("Lime Juice")}>
                Lime Juice
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="image-cocktails">
                <img src={require("../../assets/images/cocktails.png")}></img>
              </div>
            </Grid>
          </Grid>
        </>
      )}
      {loading ? <Loader /> : <>{drinks && <Gallery drinks={drinks} />}</>}
    </>
  );
}
