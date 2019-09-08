import React from "react";
import { ConvertContainer } from "../atoms/ConvertContainer";
import { LabelText } from "../atoms/LabelText";
import { ResultWrapper } from "../atoms/ResultWrapper";
import { ToConvertText } from "../atoms/ToConvertText";

export const ToConvertArea = ({ toConvertValue }) => {
  return (
    <ConvertContainer>
      <LabelText>Convertir</LabelText>
      <ResultWrapper>
        <ToConvertText>{toConvertValue}</ToConvertText>
      </ResultWrapper>
    </ConvertContainer>
  );
};
