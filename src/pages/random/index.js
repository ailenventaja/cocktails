import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useRandom } from "./hook";
import Loader from "../../components/Loader";
import CocktailDetails from "../../components/CocktailDetails";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Random() {
  const { getRandom, loading, data } = useRandom();

  const { drinks } = data ? data : [];

  useEffect(async () => {
    await getRandom();
  }, []);

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
