import { useState } from "react";
import { axiosApiInstance } from "../../api";
import { API_END_POINT_GET_RANDOM } from "../../api/endPoints";

export const useRandom = () => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const getRandom = async () => {
    setIsLoading(true);
    try {
      const { data: random } = await axiosApiInstance.get(
        API_END_POINT_GET_RANDOM
      );

      setData(random);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return {
    getRandom,
    loading,
    data,
  };
};
