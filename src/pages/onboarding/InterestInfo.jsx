import React from "react";
import styled from "styled-components";
import NextButton from "../../components/onboarding/NextButton";

/**
 * entry point
 * @returns
 */
const InterestInfo = () => {
  const objectList = [
    {
      title: "스포츠",
      tagList: [
        "배드민턴",
        "자전거",
        "테니스",
        "수영",
        "필라테스",
        "클라이밍",
        "당구",
      ],
    },
    {
      title: "문화/예술",
      tagList: [
        "악기 연주",
        "페스티벌",
        "그림 그리기",
        "공연 관람",
        "전시회 관람",
        "글쓰기",
      ],
    },
  ];

  return (
    <Container>
      <Header />
      <Content objectList={objectList} />
      <NextButton />
    </Container>
  );
};

export default InterestInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px;
`;

/**
 * header
 * @returns
 */
const Header = () => {
  return (
    <HeaderContainer>
      <Title>아띠 멤버님의</Title>
      <Title>관심사가 궁금해요!</Title>
      <SubTitle>미래의 친구들에게 알려줄거에요!</SubTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const SubTitle = styled.div`
  margin: 8px 0;
  font-size: 14px;
`;

/**
 * content 영역 스크롤 가능, 객체 배열받아서 랜더링
 * @param {Array} objectList
 * @returns
 */
const Content = ({ objectList }) => {
  return (
    <ScrollArea>
      {objectList.map((object, index) => {
        return (
          <CategoryContainer key={index}>
            <CategoryTitle>{object.title}</CategoryTitle>
            <CategoryContent tagList={object.tagList}></CategoryContent>
          </CategoryContainer>
        );
      })}
    </ScrollArea>
  );
};

const ScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const CategoryContainer = styled.div`
  width: 100%;
  height: auto;
`;

const CategoryTitle = styled.div`
  font-size: 18px;
  margin: 18px 0;
`;

const CategoryContent = ({ tagList }) => {
  return (
    <TagContainer>
      {tagList.map((tag, index) => {
        return <Tag key={index}>{`#${tag}`}</Tag>;
      })}
    </TagContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  text-align: center;
  text-justify: center;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 8px;
  background-color: white;
`;
