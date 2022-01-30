import { useState } from "react";
import { axiosApiInstance } from "../../api";
import { API_END_POINT_GET_BY_CATEGORY } from "../../api/endPoints";

export const useCategories = () => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const getByCategory = async (categoryName) => {
    setIsLoading(true);
    try {
      const { data: drinkByCategory } = await axiosApiInstance.get(
        API_END_POINT_GET_BY_CATEGORY + categoryName
      );

      setData(drinkByCategory);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return {
    getByCategory,
    loading,
    data,
  };
};
