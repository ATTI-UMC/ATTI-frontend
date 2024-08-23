import styled from "styled-components";
import backBtn from "../../assets/images/backBtn.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <Container>
      <BackButton
        onClick={() => {
          nav(-1);
        }}
        src={backBtn}
      />
      <Text>친구 추천</Text>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #0fbd88;
  background-color: #fff;
`;

const BackButton = styled.img`
  position: fixed;
  left: 0;
  margin-left: 30px;
  width: 11px;
  height: 19px;
`;

const Text = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
`;
