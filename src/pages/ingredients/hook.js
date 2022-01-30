import { useState } from "react";
import { axiosApiInstance } from "../../api";
import { API_END_POINT_GET_BY_INGREDIENT } from "../../api/endPoints";

export const useIngredients = () => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const getByIngredient = async (ingredientName) => {
    setIsLoading(true);
    try {
      const { data: drinkByIngredient } = await axiosApiInstance.get(
        API_END_POINT_GET_BY_INGREDIENT + ingredientName
      );

      setData(drinkByIngredient);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return {
    getByIngredient,
    loading,
    data,
  };
};
