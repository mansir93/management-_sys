import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./Cookie";

export function useAxios() {
  const navigate = useNavigate();
  const token = getCookie("susu_auth");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [method, setMethod] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const ApiRequest = async (path, method, body, params) => {
    setIsLoading(true);
    setMethod(method);
    const url = `https://storefrontsmes-june-api.onrender.com/api` + path;

    try {
      const response = await axios({
        method,
        url,
        params: params,
        data: body,
        ...config,
      });

      if (response.status >= 200 && response.status < 300) {
        setData(response.data);
        setError(null);
      } else {
        setError(new Error(`Request failed with status ${response.status}`));
      }
    } catch (error) {
      setError(error.response.data);
      if (!token) {
        // navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, ApiRequest };
}
