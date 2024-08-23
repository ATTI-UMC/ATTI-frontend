import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
import { useParams } from "react-router-dom";
import { images } from "../../utils/mbti-characters";
import CommunityHeader from "../../components/community/CommunityHeader";
import { fetchBoard } from "../../api/fetch";
import { formatDate } from "../../utils/get-date-string";

const CategoryCommunity = () => {
  const { category, mbti } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const dummyIntro = "아띠토크에서 고민상담을 들어주세요!";

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchBoard(category);
        setPosts(data);
      } catch (error) {
        setError("게시글을 불러오는 중 오류가 발생했습니다.");
      }
    };

    loadPosts();
  }, [category]);

  return (
    <Layout>
      <CommunityHeader mbti={mbti} category={category} />
      <Intro>
        <MbtiCharacter src={images[mbti]} alt="mbti 캐릭터" />
        <IntroText> {dummyIntro}</IntroText>
      </Intro>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        posts.map((data) => (
          <PostItem
            key={data.board_id}
            id={data.id}
            title={data.title}
            content={data.content}
            commentCount={data.comment_count}
            time={formatDate(data.updated_at)}
            writer={data.nickname}
          />
        ))
      )}
    </Layout>
  );
};

export default CategoryCommunity;

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

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;
