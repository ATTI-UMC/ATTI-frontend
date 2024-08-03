import React, { createContext, useState, useContext } from "react";

const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (tag, isSelected) => {
    setSelectedTags((current) =>
      isSelected ? [...current, tag] : current.filter((t) => t !== tag)
    );
  };

  return (
    <TagContext.Provider value={{ selectedTags, handleTagSelection }}>
      {children}
    </TagContext.Provider>
  );
};

export const useTagContext = () => {
  return useContext(TagContext);
};
