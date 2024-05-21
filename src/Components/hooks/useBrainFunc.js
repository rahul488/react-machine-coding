import { useRef } from "react";

function areEqual(prevDeps, currDeps) {
  if (!prevDeps) return false;
  if (prevDeps.length != currDeps.length) return false;

  for (let i = 0; i < currDeps.length; i++) {
    if (prevDeps[i] !== currDeps[i]) return false;
  }
  return true;
}

export const useBrainFunc = (cb, deps) => {
  const memoFunc = useRef(null);

  if (!memoFunc.current || !areEqual(memoFunc.current?.deps, deps)) {
    memoFunc.current={
        fn:cb,
        deps
    }
  }

  return memoFunc.current.fn;
};
