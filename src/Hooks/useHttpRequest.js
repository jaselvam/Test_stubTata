import axios from 'axios';
import React,{useCallback} from 'react';
const useHttpRequest = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const fetchData =  useCallback((url)=>{
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setApiResponse(res.data);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  },[]);

  return { loading: isLoading, apiResponse, errorMessage, fetchData };
};
export default useHttpRequest;
