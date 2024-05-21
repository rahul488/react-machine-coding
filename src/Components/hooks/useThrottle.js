import { useEffect, useRef, useState } from "react";

function useThrottle(value, delay) {
  const [throttleValue, setThrottleVal] = useState();
  const lastTime = useRef(0);

  useEffect(() => {
    const currTime = new Date().getTime();
    if (lastTime.current == 0 || currTime - lastTime.current > delay) {
      setThrottleVal(value);
      lastTime.current = new Date().getTime();
    }
  }, [delay, value]);

  return { throttleValue };
}

export default useThrottle;
