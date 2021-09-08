import {useState, useEffect} from 'react';
import axios from 'axios';

const url =
  'https://wagamama-api-default-rtdb.europe-west1.firebasedatabase.app/curry.json';

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading('loading...');
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios
      .get(url, {cancelToken: source.token})
      .then(res => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res.data && setData(res.data);
      })
      .catch(err => {
        setLoading(false);
        setError(`Error: ${err}`);
      });
    return () => {
      source.cancel();
    };
  }, []);

  return {data, loading, error};
}

export default useFetch;
