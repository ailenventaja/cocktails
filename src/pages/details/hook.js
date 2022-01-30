import { useState } from "react";
import { axiosApiInstance } from "../../api";
import { API_END_POINT_GET_BY_NAME } from "../../api/endPoints";

export const useName = () => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const getByName = async (cocktailName) => {
    setIsLoading(true);
    try {
      const { data: drinkByName } = await axiosApiInstance.get(
        API_END_POINT_GET_BY_NAME + cocktailName
      );

      setData(drinkByName);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return {
    getByName,
    loading,
    data,
  };
};
