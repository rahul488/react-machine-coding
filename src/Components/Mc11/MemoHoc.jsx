import React, { useEffect, useRef, useState } from "react";

function areEqual(prevProps, currProps) {
  if (!prevProps) return false;
  if (Object.keys(prevProps).length !== Object.keys(currProps).length)
    return false;

  for (let key in currProps) {
    if (currProps[key] !== prevProps[key]) return false;
  }

  return true;
}

function MemoHoc(Component) {
  return function (props) {
    const memorizedRef = useRef(null);

    if (!areEqual(memorizedRef.current?.props, props)) {
      memorizedRef.current = {
        props,
      };
    }else{
      return
    }
    return <Component {...memorizedRef.current.props} />;
  };
}

export default MemoHoc;
