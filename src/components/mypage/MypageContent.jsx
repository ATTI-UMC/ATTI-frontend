import styled from "styled-components";

const MypageContent = ({ ...props }) => {
  return (
    <Container>
      <Category>{props.category}</Category>
      {props.title.map((e, idx) => (
        <Title key={idx}>{e}</Title>
      ))}
    </Container>
  );
};

export default MypageContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-top: 1px solid rgba(217, 217, 217, 1);
  gap: 16px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Category = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 10px 0 5px 0;
`;

const Title = styled.div`
  font-size: 14px;
`;
