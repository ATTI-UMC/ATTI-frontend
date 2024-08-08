import styled from "styled-components";

const Attitalk = () => {
  return (
    <AttitalkContainer>
      <h1>HEADER</h1>
    </AttitalkContainer>
  );
};

export default Attitalk;

const AttitalkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
