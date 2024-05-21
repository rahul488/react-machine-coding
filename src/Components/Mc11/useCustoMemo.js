import React, { useEffect, useRef } from "react";

function areEqual(prevDeps,nextDeps){
  if(!prevDeps) return false;
  if(prevDeps.length != nextDeps.length) return false
  for(let i=0;i<nextDeps.length;i++){
    if(prevDeps[i] !== nextDeps[i]){
      return false
    }
  }
  return true;

}

function useCustoMemo(cb, deps) {
  const memorizedRef = useRef(null);

  if (!memorizedRef.current || !areEqual(memorizedRef.current.deps,deps)) {
    memorizedRef.current = {
      value: cb(),
      deps
    };
  }

  useEffect(() => {
    return () => memorizedRef.current=null
  },[])

  return memorizedRef.current.value;
}

export default useCustoMemo;
