import React, { createContext, useEffect, useState } from "react";

export const WindowSize = createContext(null);

export default function WindowContext({ children }) {
  const [WindowSize, SetWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function SetWindowWidth() {
      SetWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", SetWindowWidth);
    // clean_up function
    return () => {
      window.removeEventListener("resize");
    };
  }, []);
  return (
    <WindowSize.Provider value={{ WindowSize, SetWindowSize }}>
      {children}
    </WindowSize.Provider>
  );
}
