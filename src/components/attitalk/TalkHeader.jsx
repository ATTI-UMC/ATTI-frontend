import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backBtn from "../../assets/images/backBtn.png";

const TalkHeader = ({ title }) => {
  const nav = useNavigate();

  return (
    <HeaderContainer>
      <BackBtn onClick={() => nav(-1)}>
        <BackButtonImg src={backBtn} alt="Back" />
      </BackBtn>
      <Title>{title}</Title>
      <Complete>완료</Complete>
    </HeaderContainer>
  );
};

export default TalkHeader;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  background-color: #fff;
  text-align: center;
  border-bottom: 1px solid #10d99b;
`;

const BackBtn = styled.button`
  width: 10px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;
const BackButtonImg = styled.img`
  width: 10px;
  height: 20px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-top: 5px;
  flex: 1;
  font-size: 18px;
  font-weight: bold;
`;
const Complete = styled.div`
  align-self: center;
  font-size: 14px;
  color: #1c1b1f;
  margin-top: 5px;
`;
