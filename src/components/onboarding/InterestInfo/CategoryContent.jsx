import React from "react";
import styled from "styled-components";
import Tag from "./Tag";

const CategoryContent = ({ tagList }) => {
  return (
    <TagContainer>
      {tagList.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </TagContainer>
  );
};

export default CategoryContent;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
