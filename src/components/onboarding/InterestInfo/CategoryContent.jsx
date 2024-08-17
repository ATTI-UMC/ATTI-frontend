import React from "react";
import styled from "styled-components";
import Tag from "./Tag";

/**
 * @param {Array} tagList
 * @returns 태그 컨테이너
 */
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
