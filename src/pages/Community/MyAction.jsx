import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
import { useParams } from "react-router-dom";
import ActionHeader from "../../components/community/ActionHeader";

const MyAction = () => {
  const { label } = useParams();

  const dummyIntro =
    "임시텍스트, 계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다.";
  const dummyData = [
    {
      id: "1",
      title: "React에서 상태 관리하기",
      content: "React에서 상태를 효과적으로 관리하는 방법에 대해 알아보세요.",
      commentCount: 12,
      time: "2024-08-10",
      writer: "JaneDoe",
    },
    {
      id: "2",
      title: "Styled-Components로 스타일링",
      content:
        "Styled-Components를 사용하여 React 컴포넌트에 스타일을 적용하는 방법을 배우세요.",
      commentCount: 8,
      time: "2024-08-09",
      writer: "JohnSmith",
    },
    {
      id: "3",
      title: "TypeScript와 React 통합",
      content:
        "TypeScript와 React를 함께 사용하는 방법에 대한 가이드를 제공합니다.",
      commentCount: 15,
      time: "2024-08-08",
      writer: "Alice",
    },
    {
      id: "4",
      title: "Next.js로 SSR 구현하기",
      content:
        "Next.js를 사용하여 서버 사이드 렌더링(SSR)을 구현하는 방법을 알아보세요.",
      commentCount: 5,
      time: "2024-08-07",
      writer: "Bob",
    },
    {
      id: "5",
      title: "React에서 상태 관리하기",
      content: "React에서 상태를 효과적으로 관리하는 방법에 대해 알아보세요.",
      commentCount: 12,
      time: "2024-08-10",
      writer: "JaneDoe",
    },
    {
      id: "6",
      title: "Styled-Components로 스타일링",
      content:
        "Styled-Components를 사용하여 React 컴포넌트에 스타일을 적용하는 방법을 배우세요.",
      commentCount: 8,
      time: "2024-08-09",
      writer: "JohnSmith",
    },
    {
      id: "7",
      title: "TypeScript와 React 통합",
      content:
        "TypeScript와 React를 함께 사용하는 방법에 대한 가이드를 제공합니다.",
      commentCount: 15,
      time: "2024-08-08",
      writer: "Alice",
    },
    {
      id: "8",
      title: "Next.js로 SSR 구현하기",
      content:
        "Next.js를 사용하여 서버 사이드 렌더링(SSR)을 구현하는 방법을 알아보세요.",
      commentCount: 5,
      time: "2024-08-07",
      writer: "Bob",
    },
  ];

  return (
    <Layout>
      <ActionHeader label={label} />
      {dummyData.map((data) => (
        <PostItem
          key={data.id}
          id={data.id}
          title={data.title}
          content={data.content}
          commentCount={data.commentCount}
          time={data.time}
          writer={data.writer}
        />
      ))}
    </Layout>
  );
};

export default MyAction;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 425px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 12px;
  overflow-y: scroll;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 15px;
`;

const IntroText = styled.div`
  width: 285px;
  height: 105px;
  padding: 10px;
  color: white;
  background-color: #0fbd88;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const MbtiCharacter = styled.img`
  margin-right: 10px;
  width: 90px;
  height: 100px;
`;
