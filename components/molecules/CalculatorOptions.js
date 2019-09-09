import React from "react";
import { ConvertContainer } from "../atoms/ConvertContainer";
import { LabelText } from "../atoms/LabelText";
import { CalculatorContainer } from "../atoms/CalculatorContainer";
import { CalcKeyContainer } from "../atoms/CalcKeyContainer";
import { CalculatorValueKeys } from "../atoms/CalculatorValueKeys";
import { CalculatorOptionKeys } from "../atoms/CalculatorOptionKeys";
import { CalcKey } from "../atoms/CalcKey";
import { CalculatorAreaWrapper } from "../atoms/CalculatorAreaWrapper";

export const CalculatorOptions = ({ calcKeys, onKeyPress, onDelete, onConvertPress }) => {
  return (
    <CalculatorAreaWrapper>
      <ConvertContainer>
        <LabelText>Valores</LabelText>
      </ConvertContainer>
      <CalculatorContainer>
        <CalculatorValueKeys>
          {calcKeys.map(calcKey => (
            <CalcKeyContainer activeOpacity={0.3} onPress={onKeyPress(calcKey)} key={calcKey}>
              <CalcKey>{calcKey}</CalcKey>
            </CalcKeyContainer>
          ))}
        </CalculatorValueKeys>
        <CalculatorOptionKeys>
          <CalcKeyContainer onPress={onDelete}>
            <CalcKey>DEL</CalcKey>
          </CalcKeyContainer>
          <CalcKeyContainer isConvert onPress={onConvertPress}>
            <CalcKey isConvert>=</CalcKey>
          </CalcKeyContainer>
        </CalculatorOptionKeys>
      </CalculatorContainer>
    </CalculatorAreaWrapper>
  );
};
