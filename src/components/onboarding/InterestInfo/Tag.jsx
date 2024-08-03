import React from "react";
import styled from "styled-components";
import { useTagContext } from "../context/TagContext";

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
