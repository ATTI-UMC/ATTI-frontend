import React from "react";
import styled from "styled-components";

const MbtiContainer = ({ ...props }) => {
  return (
    <Wrapper>
      <CircleContainer>
        <BigCircle
          selected={props.selectedValue === 25}
          onClick={() => props.handleClick(props.idx, 25)}
        >
          {props.left}
        </BigCircle>
        <SmallCircle
          selected={props.selectedValue === 50}
          onClick={() => props.handleClick(props.idx, 50)}
        ></SmallCircle>
        <SmallCircle
          selected={props.selectedValue === 75}
          onClick={() => props.handleClick(props.idx, 75)}
        ></SmallCircle>
        <BigCircle
          selected={props.selectedValue === 100}
          onClick={() => props.handleClick(props.idx, 100)}
        >
          {props.right}
        </BigCircle>
      </CircleContainer>
      <DescriptionContainer>
        <Description>{props.leftDescription}</Description>
        <Description>{props.rightDescription}</Description>
      </DescriptionContainer>
    </Wrapper>
  );
};

export default MbtiContainer;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const BigCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${(props) => (props.selected ? `#10D99B` : `rgba(153, 153, 153, 0.6)`)};
  border-radius: 50%;
  width: 68px;
  height: 68px;
  cursor: pointer;
  font-size: 28px;
`;

const SmallCircle = styled.div`
  border: 1px solid
    ${(props) => (props.selected ? `#10D99B` : `rgba(153, 153, 153, 0.6)`)};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin: 10px 15px;
`;
