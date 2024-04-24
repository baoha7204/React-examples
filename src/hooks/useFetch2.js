import { useEffect, useReducer, useRef } from "react";

const initialState = {
  status: "idle", // idle | fetching | fetched | error
  error: null,
  data: [],
};

const useFetch2 = (url) => {
  const cache = useRef({});
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  }, initialState);

  const clearCache = () => {
    cache.current = {};
  };

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;
    const fetchedData = async () => {
      dispatch({ type: "FETCHING" });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        cache.current[url] = data;
        if (cancelRequest) return;
        dispatch({ type: "FETCHED", payload: data });
      } catch (error) {
        if (cancelRequest) return;
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchedData();

    return () => {
      cancelRequest = true;
    };
  }, [url]);

  return {
    status: state.status,
    data: state.data,
    error: state.error,
    clearCache,
  };
};

export default useFetch2;
