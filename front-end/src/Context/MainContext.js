import React, { createContext, useState } from "react";

export const Menu = createContext("");
export default function MenuContext({ children }) {
  const [isOpen, SetIsOpen] = useState(true);
  return (
    <Menu.Provider value={{ isOpen, SetIsOpen }}>{children}</Menu.Provider>
  );
}
