import React from "react";
import { ConvertContainer } from "../atoms/ConvertContainer";
import { LabelText } from "../atoms/LabelText";
import { BaseButton } from "../atoms/BaseButton";
import { SliderWrapper } from "../atoms/SlliderWrapper";
import { BaseButtonText } from "../atoms/BaseButtonText";
import { SliderContainer } from "../atoms/SliderContainer";

export const BaseSliderSection = ({ baseValues, baseTypeText }) => {
  return (
    <SliderContainer>
      <ConvertContainer>
        <LabelText>{baseTypeText}</LabelText>
      </ConvertContainer>
      <SliderWrapper showsHorizontalScrollIndicator={false} horizontal={true}>
        {baseValues.map(value => (
          <BaseButton key={value}>
            <BaseButtonText>{value}</BaseButtonText>
          </BaseButton>
        ))}
      </SliderWrapper>
    </SliderContainer>
  );
};
