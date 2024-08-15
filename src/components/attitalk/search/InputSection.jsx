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
`;

const Icon = styled.div``;

const Input = styled.input``;
