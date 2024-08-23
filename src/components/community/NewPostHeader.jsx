import styled from "styled-components";
import backBtn from "../../assets/images/backBtn.png";
import { useNavigate } from "react-router-dom";

const NewPostHeader = ({ title, onSubmit }) => {
  const nav = useNavigate();

  return (
    <Container>
      <BackContainer>
        <BackButton
          onClick={() => {
            nav(-1);
          }}
          src={backBtn}
        />
      </BackContainer>
      <Text>{title}</Text>
      <Complete onClick={onSubmit}>완료</Complete>
    </Container>
  );
};

export default NewPostHeader;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #0fbd88;
`;

const BackContainer = styled.div``;

const BackButton = styled.img`
  width: 11px;
  height: 19px;
  cursor: pointer;
`;

const Text = styled.div`
  text-align: center;
`;

const Complete = styled.div`
  cursor: pointer;
  color: #0fbd88;
`;
