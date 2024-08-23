import styled from "styled-components";
import backBtn from "../../assets/images/backBtn.png";
import { useNavigate } from "react-router-dom";
import post from "../../assets/images/post1.png";

const CommunityHeader = ({ mbti, category }) => {
  const nav = useNavigate();

  const categories = [
    { value: "counseling", label: "고민상담소" },
    { value: "learning", label: "학습 솔루션" },
    { value: "mentoring", label: "멘토링" },
  ];

  const categoryLabel = categories.find((cat) => cat.value === category).label;

  const handleIconClick = () => {
    nav("/newpost", {
      state: {
        mbti,
        category,
      },
    });
  };

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
      <Text>{`${mbti} ${categoryLabel}`}</Text>
      <Icon src={post} onClick={handleIconClick} />
    </Container>
  );
};

export default CommunityHeader;

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

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
