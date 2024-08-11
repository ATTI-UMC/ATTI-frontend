import React from "react";
import styled from "styled-components";

const PostItem = ({ title, content, commentCount, time, writer }) => {
  return (
    <PostContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Footer>
        <CommentCount>댓글 {commentCount}</CommentCount>|<Time>{time}</Time>|
        <Writer>{writer}</Writer>
      </Footer>
    </PostContainer>
  );
};

export default PostItem;

const PostContainer = styled.div`
  width: 360px;
  height: 120px;
  border-bottom: 1px solid #ddd;
  padding: 12px;
  padding-bottom: 28px;
  margin: 12px 0;
  gap: 4px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Content = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 12px;
  color: #777;
`;

const CommentCount = styled.span``;

const Time = styled.span``;

const Writer = styled.span``;
