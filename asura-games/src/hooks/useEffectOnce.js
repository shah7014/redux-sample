import React, { useEffect, useRef } from "react";

const UseEffectOnce = (effect) => {
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      effect();
      ref.current = true;
    }
  }, []);
};

export default UseEffectOnce;
