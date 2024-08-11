import styled from "styled-components";
import React, { useState, useEffect } from "react";
import MbtiContainer from "./MbtiContainer";
import { useOnboardingStore } from "../../store/useOnboardingStore";

const MbtiForm = () => {
  const [mbti, setMbti] = useState([null, null, null, null]);
  const [isMbtiValid, setIsMbtiValid] = useState(false);
  const [value, setValue] = useState(null);

  const { setNav, setDisable } = useOnboardingStore((state) => ({
    setNav: state.setNav,
    setDisable: state.setDisable,
  }));

  useEffect(() => {
    setIsMbtiValid(false);
  }, []);

  useEffect(() => {
    const allSelected = mbti.every((e) => e !== null);
    setIsMbtiValid(allSelected);
    if (isMbtiValid) {
      setNav("/onboarding/interest-info");
      setDisable(false);
      console.log("mbtivalid");
    }
  }, [mbti, isMbtiValid]);

  const handleClick = (idx, value) => {
    const selections = [...mbti];
    selections[idx] = value;
    setMbti(selections);
  };

  return (
    <FormContainer>
      <MbtiContainer
        left={"E"}
        right={"I"}
        leftDescription={"외향적"}
        rightDescription={"내향적"}
        idx={0}
        handleClick={handleClick}
        selectedValue={mbti[0]}
      />
      <MbtiContainer
        left={"S"}
        right={"N"}
        leftDescription={"감각적"}
        rightDescription={"직관적"}
        idx={1}
        handleClick={handleClick}
        selectedValue={mbti[1]}
      />
      <MbtiContainer
        left={"T"}
        right={"F"}
        leftDescription={"논리적"}
        rightDescription={"감정적"}
        idx={2}
        handleClick={handleClick}
        selectedValue={mbti[2]}
      />
      <MbtiContainer
        left={"P"}
        right={"J"}
        leftDescription={"계획적"}
        rightDescription={"자율적"}
        idx={3}
        handleClick={handleClick}
        selectedValue={mbti[3]}
      />
    </FormContainer>
  );
};

export default MbtiForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
