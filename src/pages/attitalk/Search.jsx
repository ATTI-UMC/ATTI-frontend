import React, { useState } from "react";
import styled from "styled-components";
import InputSection from "../../components/attitalk/search/InputSection";
import ChatHeader from "../../components/chat/ChatHeader";
import search from "../../assets/images/search.png";

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchContainer>
      <ChatHeader title={"검색"} />
      <ContentsWrappper>
        <InputSection />
        {isSearching ? <Searching /> : <NotSearching />}
      </ContentsWrappper>
    </SearchContainer>
  );
};
export default Search;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ContentsWrappper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const NotSearching = () => (
  <NotSearchingContainer>
    <MagnifyingGlassIcon src={search}></MagnifyingGlassIcon>
    <Message>새로운 아띠토크를 찾아보세요!</Message>
  </NotSearchingContainer>
);

const Searching = () => (
  <SearchingContainer>
    <LoadingMessage>검색 중입니다...</LoadingMessage>
  </SearchingContainer>
);

const NotSearchingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  margin: 10px;
`;

const MagnifyingGlassIcon = styled.img`
  font-size: 50px;
  color: #999;
`;

const Message = styled.div`
  font-size: 18px;
  color: #999;
  margin-top: 20px;
`;

const SearchingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  color: #999;
`;
