import React, { useEffect } from "react";
import styled from "styled-components";
import CategoryContent from "./CategoryContent";
import { useOnboardingStore } from "../../../store/useOnboardingStore";

const Content = ({ objectList }) => {
  const setNav = useOnboardingStore((state) => state.setNav);
  useEffect(() => {
    setNav("/onboarding/terms-agreement");
  }, [setNav]);

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
  height: fit-content;
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
