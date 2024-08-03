import React from "react";
import styled from "styled-components";
import { TagProvider } from "../../context/TagContext";
import Header from "../../components/onboarding/InterestInfo/Header";
import Content from "../../components/onboarding/InterestInfo/Content";

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
    <TagProvider>
      <Container>
        <Header />
        <Content objectList={objectList} />
      </Container>
    </TagProvider>
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
