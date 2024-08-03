import React from "react";
import styled from "styled-components";

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Progress width={`${progress}%`}></Progress>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  width: 80%;
  background-color: D9D9D9;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 2rem;
`;

const Progress = styled.div`
  width: ${(props) => props.width};
  height: 10px;
  background-color: #10d99b;
  border-radius: 5px;
  text-align: center;
  color: white;
  line-height: 30px; /* Align text vertically */
  transition: width 0.3s ease;
`;
