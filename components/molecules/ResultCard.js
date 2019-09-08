import React from "react";
import { ResultText } from "../atoms/ResultText";
import { ResultCardContainer } from "../atoms/ResultCardContainer";
import { ResultContentText } from "../atoms/ResultContentText";
import { ResultCardBaseText } from "../atoms/ResultCardBaseText";

export const ResultCard = ({ value, fromBase, toBase }) => {
  return (
    <ResultCardContainer>
      <ResultText>Resultado</ResultText>
      <ResultContentText>{value}</ResultContentText>
      <ResultCardBaseText>
        {fromBase} to {toBase}
      </ResultCardBaseText>
    </ResultCardContainer>
  );
};
