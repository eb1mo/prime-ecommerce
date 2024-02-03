import axios from "axios";
import { useEffect, useState } from "react";

const usePost = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const mutate = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(url, data);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    mutate
  };
};

export default usePost;
