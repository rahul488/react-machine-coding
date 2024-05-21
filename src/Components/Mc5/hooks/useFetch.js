import React, { useRef, useState } from "react";

function useFetch() {
  const [loading, setLoading] = useState(false);

  const abortRef = useRef();

  async function fetchData(url, type = "GET", payload = {}) {
    try {
      if (abortRef?.current) {
        abortRef.current.abort("Request Cancelled.");
      }
      abortRef.current = new AbortController();
      const requestOptions = {
        signal: abortRef.current.signal,
      };
      if(type !== 'GET'){
        requestOptions[body] = JSON.stringify(payload)
      }
      setLoading(true);

      const res = await fetch(url, {
        method: type,
        ...requestOptions,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  }

  return { loading, fetchData };
}

export default useFetch;
