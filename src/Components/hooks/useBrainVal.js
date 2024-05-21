import React, { useEffect, useRef } from "react";

function areEqual(prevDeps,currDeps) { 
    if(!prevDeps) return false;

    if(prevDeps.length != currDeps.length) return false;

    for(let i=0;i<currDeps.length;i++){
        if(prevDeps[i] !== currDeps[i]) return false
    }
    return true;

 }

function useBrain(cb, deps) {
  const memorisedRef = useRef(null);
  if (!memorisedRef.current || !areEqual(memorisedRef.current,deps)) {
    memorisedRef.current = deps;
    memorisedRef.current.value = cb();
  }

  useEffect(() => {
    return () => (memorisedRef.current = null);
  }, []);

  return memorisedRef.current.value;
}

export default useBrain;
