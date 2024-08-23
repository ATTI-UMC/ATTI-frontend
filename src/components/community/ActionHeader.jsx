import styled from "styled-components";
import backBtn from "../../assets/images/backBtn.png";
import { useNavigate } from "react-router-dom";

const ActionHeader = ({ label }) => {
  const nav = useNavigate();

  const categories = [
    { value: "bookmark", name: "북마크" },
    { value: "mycomment", name: "댓글 단 글" },
    { value: "myposts", name: "내가 쓴 글" },
  ];

  const categoryLabel = categories.find((cat) => cat.value === label).name;

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
      <Text>{categoryLabel}</Text>
    </Container>
  );
};

export default ActionHeader;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #0fbd88;
`;

const BackContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 40%;
`;

const BackButton = styled.img`
  width: 11px;
  height: 19px;
  cursor: pointer;
`;

const Text = styled.div`
  margin-right: auto;
`;
