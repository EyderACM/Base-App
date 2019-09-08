import React from "react";
import { ConvertContainer } from "../atoms/ConvertContainer";
import { LabelText } from "../atoms/LabelText";
import { CalculatorContainer } from "../atoms/CalculatorContainer";
import { CalcKeyContainer } from "../atoms/CalcKeyContainer";
import { CalculatorValueKeys } from "../atoms/CalculatorValueKeys";
import { CalculatorOptionKeys } from "../atoms/CalculatorOptionKeys";
import { CalcKey } from "../atoms/CalcKey";
import { View } from "react-native";
import { CalculatorAreaWrapper } from "../atoms/CalculatorAreaWrapper";

export const CalculatorOptions = ({ calcKeys }) => {
  return (
    <CalculatorAreaWrapper>
      <ConvertContainer>
        <LabelText>Valores</LabelText>
      </ConvertContainer>
      <CalculatorContainer>
        <CalculatorValueKeys>
          {calcKeys.map(calcKey => (
            <CalcKeyContainer key={calcKey}>
              <CalcKey>{calcKey}</CalcKey>
            </CalcKeyContainer>
          ))}
        </CalculatorValueKeys>
        <CalculatorOptionKeys>
          <CalcKeyContainer>
            <CalcKey>DEL</CalcKey>
          </CalcKeyContainer>
          <CalcKeyContainer>
            <CalcKey>=</CalcKey>
          </CalcKeyContainer>
        </CalculatorOptionKeys>
      </CalculatorContainer>
    </CalculatorAreaWrapper>
  );
};
