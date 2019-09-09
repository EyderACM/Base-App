import styled from "styled-components";
import { Text } from "react-native";
import * as colors from "../../styles/colors";

export const BaseButtonText = styled.Text`
  color: ${props => props.selectedBase ? "white" : colors.mainColor};
  font-weight: 500;
`;
