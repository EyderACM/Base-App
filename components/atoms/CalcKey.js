import styled from "styled-components";
import { Text } from "react-native";
import * as colors from "../../styles/colors";

export const CalcKey = styled.Text`
  align-self: center;
  color: ${props => props.isConvert ? "white" :colors.mainColor};
  font-weight: 500;  
`;
