import {useEffect, useState} from "react";
import useLocalStorage from "./useLocalStorage";
import axios from "axios";

const useAxios = (baseUrl, keyInLS) => {
    const [responses, setResponses] = useLocalStorage(keyInLS);

    const addResponseData = async (formatter = responseData => responseData, restOfUrl = "") => {
      const response = await axios.get(`${baseUrl}${restOfUrl}`);
      console.log(response)
      console.log(formatter(response.data))
      setResponses(prevData => [...prevData, formatter(response.data)]);
    };

    return [responses, addResponseData]
}

export default useAxios; 