import React from "react";
import styled from "styled-components";
import { useTagContext } from "../../../context/TagContext";

/**
 * useTagContext 을 통해 선택된 태그 TagContext에서 관리
 * @param {string} tag
 * @returns 태크 컴포넌트
 */
const Tag = ({ tag }) => {
  const { selectedTags, handleTagSelection } = useTagContext();
  const selected = selectedTags.includes(tag);

  const onClickHandler = () => {
    const newSelected = !selected;
    handleTagSelection(tag, newSelected);
  };

  return (
    <StyledTag selected={selected} onClick={onClickHandler}>
      {`#${tag}`}
    </StyledTag>
  );
};

export default Tag;

const StyledTag = styled.button`
  text-align: center;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  background-color: white;
  border-color: ${(props) =>
    props.selected ? props.theme.colors.main[500] : "black"};
`;
