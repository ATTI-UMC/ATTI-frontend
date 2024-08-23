import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommunityHeader from "../../components/community/CommunityHeader";

const Post = () => {
  const { category, mbti, postId } = useParams();

  const categories = [
    { value: "counseling", label: "고민상담소" },
    { value: "learning", label: "학습 솔루션" },
    { value: "mentoring", label: "멘토링" },
  ];

  const categoryLabel = categories.find((cat) => cat.value === category).label;

  const postContent = {
    writer: "John Doe",
    date: "2024-08-10",
    time: "14:30",
    title: "Example Post Title",
    content:
      "This is the content of the post. It may be quite long and contain multiple lines of text.",
    likeCount: 120,
    commentCount: 45,
    scrapCount: 30,
  };

  // Dummy comments data
  const comments = [
    {
      id: 1,
      author: "Alice",
      content: "This is a comment. I found this post really interesting!",
      dateTime: "2024-08-10 15:00",
      likes: 10,
      replies: 2,
    },
    {
      id: 2,
      author: "Bob",
      content: "I agree with Alice. Thanks for sharing!",
      dateTime: "2024-08-10 15:30",
      likes: 5,
      replies: 1,
    },
  ];

  return (
    <>
      <PostContainer>
        <CommunityHeader title={`${mbti} ${categoryLabel}`} />
        <Header>
          <Writer>{postContent.writer}</Writer>
          <DateTime>
            {postContent.date} {postContent.time}
          </DateTime>
        </Header>
        <Title>{postContent.title}</Title>
        <Content>{postContent.content}</Content>
        <ImageSection>
          <Image></Image>
          <Image></Image>
          <Image></Image>
          <Image></Image>
          <Image></Image>
        </ImageSection>
        <Stats>
          <Stat>Likes: {postContent.likeCount}</Stat>
          <Stat>Comments: {postContent.commentCount}</Stat>
          <Stat>Scraps: {postContent.scrapCount}</Stat>
        </Stats>
        <Buttons>
          <Button>Like</Button>
          <Button>Scrap</Button>
        </Buttons>
        <CommentsSection>
          {comments.map((comment) => (
            <Comment key={comment.id}>
              <CommentHeader>
                <Avatar
                  src={`https://via.placeholder.com/40?text=${comment.author[0]}`}
                  alt={`${comment.author}'s avatar`}
                />
                <Author>{comment.author}</Author>
                <ButtonGroup>
                  <Button>Reply</Button>
                  <Button>Like ({comment.likes})</Button>
                  <Button>Chat</Button>
                </ButtonGroup>
              </CommentHeader>
              <CommentContent>{comment.content}</CommentContent>
              <CommentDateTime>{comment.dateTime}</CommentDateTime>
            </Comment>
          ))}
        </CommentsSection>
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
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.p`
  margin: 20px 0;
  font-size: 16px;
  line-height: 1.5;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 14px;
  color: #333;
`;

const Stat = styled.span``;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #0fbd88;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0e9e76;
  }
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
  gap: 8px;
`;

const CommentContent = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

const CommentDateTime = styled.span`
  font-size: 12px;
  color: #666;
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

const Icons = styled.img``;
