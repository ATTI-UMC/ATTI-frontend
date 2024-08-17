import styled from "styled-components";

const SettingField = ({ title, description, limit }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input placeholder={description}></Input>
    </Container>
  );
};

export default SettingField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div``;

const Input = styled.input``;
