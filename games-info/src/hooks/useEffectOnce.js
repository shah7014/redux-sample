import React, { useEffect, useRef } from "react";

const useEffectOnce = (effect) => {
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      effect();
    }
  }, []);
};

export default useEffectOnce;
