// imgSizeContext.js
import React, { createContext, useState } from "react";

export const imgSizeContext = createContext();

export default function ImageSizeProvider({ size, children }) {
  return (
    <imgSizeContext.Provider value={{ size }}>
      {children}
    </imgSizeContext.Provider>
  );
}
