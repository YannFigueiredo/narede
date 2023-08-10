import React, { createContext, useState } from "react";

export const TitleContext = createContext();

export default function TitleProvider({ children }) {
  const [titleValues, setTitleValues] = useState({
    id: "",
    title: "",
    description: "",
    cover: "",
    category: "",
    volumesNumber: 0,
    chaptersNumber: "",
    views: 0,
    author: []
  });

  return(
    <TitleContext.Provider value={{titleValues, setTitleValues}}>
      { children }
    </TitleContext.Provider>
  );
}