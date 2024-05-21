import React, { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debounceVal, setDebounceVal] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return { debounceVal };
}

export default useDebounce;
