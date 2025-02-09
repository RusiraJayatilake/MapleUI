import { useState, useEffect } from "react";

interface IWindowDimensions {
  height: number;
  width: number;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
