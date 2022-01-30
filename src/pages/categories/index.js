import React, { useState } from "react";
import SearchField from "react-search-field";
import { Grid } from "@mui/material";
import { Item } from "../../components/Item";
import { useCategories } from "./hook";
import Loader from "../../components/Loader";
import Gallery from "../../components/Gallery";
import "../../styles/pre-searchers.scss";

export default function Categories() {
  const { getByCategory, loading, data } = useCategories();
  const [categoryName, setCategoryName] = useState("");
  const { drinks } = data ? data : [];

  const searchByCategory = (event) => {
    var category = event.toLowerCase();
    if (category === "coffee" || category === "tea") {
      category = "Coffee / Tea";
    } else if (
      category === "party" ||
      category === "party drink" ||
      category === "punch"
    ) {
      category = "Punch / Party Drink";
    } else if (
      category === "soft drink" ||
      category === "soft" ||
      category === "soda"
    ) {
      category = "Soft Drink / Soda";
    } else if (
      category === "milk" ||
      category === "float" ||
      category === "shake"
    ) {
      category = "Milk / Float / Shake";
    } else if (category === "other") {
      category = "Other/Unknown";
    } else if (category === "ordinary") {
      category = "Ordinary drink";
    } else if (category === "homemade") {
      category = "Homemade Liqueur";
    }
    setCategoryName(event);
    getByCategory(category);
  };

  const clean = (event) => {
    if (event === "") setCategoryName("");
  };

  return (
    <>
      <SearchField
        placeholder={categoryName ? "" : "Search by category"}
        onSearchClick={searchByCategory}
        searchText={categoryName ? categoryName : ""}
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
            <Grid item xs={4} md={2}>
              <Item onClick={() => searchByCategory("Shot")}>Shot</Item>
              <Item onClick={() => searchByCategory("Ordinary Drink")}>
                Ordinary Drink
              </Item>
              <Item onClick={() => searchByCategory("Homemade Liqueur")}>
                Homemade Liqueur
              </Item>
              <Item onClick={() => searchByCategory("Cocktail")}>Cocktail</Item>
            </Grid>
            <Grid item xs={4} md={2}>
              <Item onClick={() => searchByCategory("Coffee")}>Coffee</Item>
              <Item onClick={() => searchByCategory("Party Drink")}>
                Party Drink
              </Item>
              <Item onClick={() => searchByCategory("Cocoa")}>Cocoa</Item>
              <Item onClick={() => searchByCategory("Shake")}>Shake</Item>
            </Grid>
            <Grid item xs={4} md={2}>
              <Item onClick={() => searchByCategory("Soft Drink")}>
                Soft Drink
              </Item>
              <Item onClick={() => searchByCategory("Beer")}>Beer</Item>
              <Item onClick={() => searchByCategory("Other")}>Other</Item>
              <Item onClick={() => searchByCategory("Tea")}>Tea</Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="image-cocktails">
                <img src={require("../../assets/images/ideas.jpg")}></img>
              </div>
            </Grid>
          </Grid>
        </>
      )}
      {loading ? <Loader /> : <>{drinks && <Gallery drinks={drinks} />}</>}
    </>
  );
}
