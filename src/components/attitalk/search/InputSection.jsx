import styled from "styled-components";

const InputSection = () => {
  return (
    <Container>
      <Icon />
      <Input placeholder="아띠토크 제목, MBTI, 해시태그" />
    </Container>
  );
};

export default InputSection;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;

const Icon = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 5px;
  background-color: #d9d9d9;
  border: none;
  padding: 10px;
  outline: none;
  font-size: 12px;
`;
