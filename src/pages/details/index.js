import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useName } from "./hook";
import Loader from "../../components/Loader";
import CocktailDetails from "../../components/CocktailDetails";

export default function Details() {
  const { state } = useLocation();
  if (state) var { name } = state;
  const { getByName, loading, data } = useName();

  const { drinks } = data ? data : [];

  useEffect(async () => {
    await getByName(name);
  }, [name]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>{drinks && <CocktailDetails drinks={drinks} />}</>
      )}
    </>
  );
}
