import React, { useState } from "react";
import styled from "styled-components";
import InputSection from "../../components/attitalk/search/InputSection";
import TalkHeader from "../../components/attitalk/TalkHeader";

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchContainer>
      <TalkHeader title={"검색"} />
      <ContentsWrappper>
        <InputSection />
        {isSearching && <Searching />}
        {!isSearching && <NotSearching />}
      </ContentsWrappper>
    </SearchContainer>
  );
};
export default Search;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ContentsWrappper = styled.div`
  width: 90%;
  height: 100%;
`;

const NotSearching = styled.div``;

const Searching = styled.div``;
