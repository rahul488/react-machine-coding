import React, { useEffect } from "react";

function useDebounce(value, delay, cb = () => {}) {
  useEffect(() => {
    if (value.trim().length) {
      const timeout = setTimeout(() => {
        cb(value);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [delay, value]);
}

export default useDebounce;
