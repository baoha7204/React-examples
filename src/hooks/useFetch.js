import { useEffect, useReducer, useRef } from "react";

const initialState = {
  status: "idle", // idle | fetching | fetched | error
  error: null,
  data: [],
};

const useFetch = (url) => {
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
    const controller = new AbortController();
    if (!url) return;
    const fetchedData = async () => {
      dispatch({ type: "FETCHING" });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          const response = await fetch(url, {
            signal: controller.signal,
          });
          const data = await response.json();
          cache.current[url] = data;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    fetchedData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    status: state.status,
    data: state.data,
    error: state.error,
    clearCache,
  };
};

export default useFetch;
