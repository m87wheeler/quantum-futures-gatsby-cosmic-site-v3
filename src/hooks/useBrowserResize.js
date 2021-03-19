import { useLayoutEffect, useState } from "react";

export const useBrowserResize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    if (typeof window !== undefined) {
      window.addEventListener("resize", updateSize);
      updateSize();
    }

    return () =>
      typeof window !== undefined
        ? window.removeEventListener("resize", updateSize)
        : null;
  }, []);

  return size;
};
