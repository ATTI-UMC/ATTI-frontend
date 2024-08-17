import React, { useState } from "react";
import styled from "styled-components";
import InputSection from "../../components/attitalk/search/InputSection";

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchContainer>
      <InputSection />
      {isSearching && <Searching />}
      {!isSearching && <NotSearching />}
    </SearchContainer>
  );
};
export default Search;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotSearching = styled.div``;

const Searching = styled.div``;
