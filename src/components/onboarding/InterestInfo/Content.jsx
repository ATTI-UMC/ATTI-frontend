import React from "react";
import styled from "styled-components";
import CategoryContent from "./CategoryContent";

const Content = ({ objectList }) => {
  return (
    <ScrollArea>
      {objectList.map((object, index) => (
        <CategoryContainer key={index}>
          <CategoryTitle>{object.title}</CategoryTitle>
          <CategoryContent tagList={object.tagList} />
        </CategoryContainer>
      ))}
    </ScrollArea>
  );
};

export default Content;

const ScrollArea = styled.div`
  width: 100%;
  height: 500px; // 임시 고정 높이
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const CategoryContainer = styled.div`
  width: 100%;
  height: auto;
`;

const CategoryTitle = styled.div`
  font-size: 18px;
  margin: 18px 0;
`;
