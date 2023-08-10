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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
    <TitleContext.Provider 
      value={{
        titleValues, 
        setTitleValues,
        isModalOpen,
        setIsModalOpen
      }}
    >
      { children }
    </TitleContext.Provider>
  );
}