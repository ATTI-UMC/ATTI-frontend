import styled from "styled-components";
import backBtn from "../../assets/images/backBtn.png";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
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
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

const BackContainer = styled.div`
  margin: 20px 30px 10px 30px;
`;

const BackButton = styled.img`
  width: 11px;
  height: 19px;
  cursor: pointer;
`;

const Text = styled.div`
  text-align: center;
`;
