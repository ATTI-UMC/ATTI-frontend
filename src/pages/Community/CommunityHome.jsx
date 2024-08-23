import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderMain from "../../components/HeaderMain";

const CommunityHome = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categories = [
    { value: "counseling", label: "MBTI별 고민상담소" },
    { value: "learning", label: "MBTI 맞춤 학습 솔루션" },
    { value: "mentoring", label: "MBTI 멘토링" },
  ];

  const mbtiTypes = [
    "INTJ",
    "INTP",
    "ENTJ",
    "ENTP",
    "INFJ",
    "INFP",
    "ENFJ",
    "ENFP",
    "ISTJ",
    "ISFJ",
    "ESTJ",
    "ESFJ",
    "ISTP",
    "ISFP",
    "ESTP",
    "ESFP",
  ];

  const userAction = [
    { img: "", content: "북마크" },
    { img: "", content: "댓글 단 글" },
    { img: "", content: "내가 쓴 글" },
  ];

  const handleCategoryChange = (selectedCategory) => {
    navigate(`/community/${selectedCategory}`);
  };

  const handleMBTIOptionClick = (mbti) => {
    navigate(`/community/${category}/${mbti}`);
  };

  return (
    <>
      <HeaderMain />
      <Layout>
        <CategoryContainer>
          {categories.map(({ value, label }) => (
            <CategoryOption
              key={value}
              selected={category === value}
              onClick={() => handleCategoryChange(value)}
            >
              {label}
            </CategoryOption>
          ))}
        </CategoryContainer>
        <MBTIContainer>
          {mbtiTypes.map((mbti) => (
            <MBTIOption key={mbti} onClick={() => handleMBTIOptionClick(mbti)}>
              {mbti}
            </MBTIOption>
          ))}
        </MBTIContainer>
        <UserContainer>
          {userAction.map((action, index) => (
            <UserAction key={index}>{action.content}</UserAction>
          ))}
        </UserContainer>
      </Layout>
    </>
  );
};

export default CommunityHome;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 425px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 12px;
  margin-top: 60px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CategoryOption = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  white-space: nowrap;
  border-radius: 15px;
  background-color: ${(props) => (props.selected ? "#0FBD88" : "white")};
  border: 1px solid #0fbd88;
  color: ${(props) => (props.selected ? "white" : "#0FBD88")};
`;

const MBTIContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, auto);
  place-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const MBTIOption = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 160px;
  border-radius: 5px;
  padding: 0 16px;
  background-color: #0fbd88;
  border: 1px #0fbd88;
  cursor: pointer;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const UserAction = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 85px;
  width: 110px;
  border: 1px solid #0fbd88;
  border-radius: 5px;
  background-color: transparent;
`;
