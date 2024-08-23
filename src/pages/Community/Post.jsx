import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommunityHeader from "../../components/community/CommunityHeader";
import commentIcon from "../../assets/images/post_comment.png";
import likeIcon from "../../assets/images/post_like.png";
import scrapIcon from "../../assets/images/post_scrap.png";
import { formatDate } from "../../utils/get-date-string";
import PostWriterInfo from "../../components/community/PostWriterInfo";
import whiteLikeIcon from "../../assets/images/white_like.png";
import replyIcon from "../../assets/images/reply.png";
import chatIcon from "../../assets/images/chat.png";
import { fetchPost } from "../../api/fetch";

const Post = () => {
  const { category, mbti, postId } = useParams();
  const [postContent, setPostContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPost(postId);
        setPostContent(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post info:", error);
        setError(error);
        setLoading(false);
      }
    };
    getPost();
  }, [postId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading post.</div>;
  if (!postContent) return <div>No post found.</div>;

  const date = formatDate(postContent.created_at);

  return (
    <>
      <PostContainer>
        <CommunityHeader mbti={mbti} category={category} />
        <Header>
          <PostWriterInfo
            mbti={mbti}
            nickname={postContent.nickname}
            date={date}
          />
        </Header>
        <Wrapper>
          <Title>{postContent.title}</Title>
          <Content>{postContent.content}</Content>
          <ImageSection>
            {postContent.images.map((image, index) => (
              <Image key={index} src={image} />
            ))}
          </ImageSection>
          <Stats>
            <StatWrapper>
              <Icon src={likeIcon} />
              <LikeCount>{postContent.like_count}</LikeCount>
            </StatWrapper>
            <StatWrapper>
              <Icon src={commentIcon} />
              <CommentCount>{postContent.comment_count}</CommentCount>
            </StatWrapper>
            <StatWrapper>
              <Icon src={scrapIcon} />
              <ScrapCount>{postContent.scrap_count}</ScrapCount>
            </StatWrapper>
          </Stats>
          <Buttons>
            <Button color={"1"}>
              <Icon src={whiteLikeIcon} />
              <ButtonContainer color={"1"}>좋아요</ButtonContainer>
            </Button>
            <Button color={"2"}>
              <Icon src={scrapIcon} />
              <ButtonContainer color={"2"}>스크랩</ButtonContainer>
            </Button>
          </Buttons>
          <Commercial />
          <CommentsSection>
            {postContent.comments.map((comment) => (
              <Comment key={comment.comment_id}>
                <CommentHeader>
                  <PostWriterInfo
                    mbti={mbti}
                    nickname={comment.nickname}
                    date={formatDate(comment.timestamp)}
                  />
                  <ButtonGroup>
                    <CommentButton src={whiteLikeIcon}></CommentButton>
                    <p>|</p>
                    <CommentButton src={replyIcon}></CommentButton>
                    <p>|</p>
                    <CommentButton src={chatIcon}></CommentButton>
                  </ButtonGroup>
                </CommentHeader>
                <CommentContent>{comment.content}</CommentContent>
              </Comment>
            ))}
          </CommentsSection>
        </Wrapper>
      </PostContainer>
    </>
  );
};

export default Post;

const PostContainer = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
  padding: 12px;
`;

const Header = styled.div`
  margin-bottom: 10px;
`;

const Writer = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const DateTime = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const Title = styled.h3`
  margin: 10px 0;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #d9d9d9;
`;

const Content = styled.p`
  margin: 20px 0;
  font-size: 16px;
  line-height: 1.5;
`;

const Stats = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 14px;
  color: #333;
`;

const StatWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`;

const Stat = styled.span`
  font-size: 12px;
  font-weight: 300;
`;

const LikeCount = styled(Stat)`
  color: #0fbd88;
`;

const CommentCount = styled(Stat)`
  color: #10d99b;
`;

const ScrapCount = styled(Stat)`
  color: #7fe089;
`;
const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.color === "1" ? "none" : "0.8px solid #d9d9d9")};
  border-radius: 4px;
  background-color: ${(props) => (props.color === "1" ? "#0fbd88" : "white")};
  color: white;
  cursor: pointer;
  gap: 10px;
  &:hover {
    background-color: #0e9e76;
  }
`;

const CommentButton = styled.img`
  width: 12px;
  height: 12px;
`;

const ButtonContainer = styled.span`
  color: ${(props) => (props.color === "1" ? "white" : "black")};
`;

const CommentsSection = styled.div`
  margin-top: 20px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const Author = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  padding: 6px 9px;
  border: none;
  border-radius: 15px;
  background-color: #10d99b;
  color: white;
  cursor: pointer;
  gap: 10px;
`;

const CommentContent = styled.p`
  margin: 5px;
  font-size: 14px;
  padding: 0 10px;
`;

const ImageSection = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Image = styled.img`
  background-color: #d9d9d9;
  width: 180px;
  height: 120px;
  border-radius: 10px;
  flex-shrink: 0; /* 이미지가 줄어들지 않도록 설정 */
`;

const Icon = styled.img`
  width: 10px;
  height: 11px;
`;

const Wrapper = styled.div`
  padding: 5px;
  width: 100%;
`;

const Commercial = styled.div`
  width: 100%;
  height: 60px;
  background-color: #d9d9d9;
`;
