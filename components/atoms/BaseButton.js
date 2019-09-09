import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import * as colors from "../../styles/colors";

export const BaseButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => props.selectedBase ? colors.mainColor : 'transparent'}
  border-color: ${colors.mainColor};
  border-radius: 7;
  border-width: 1.5;
  flex: 1;
  height: 35;
  justify-content: center;
  margin-left: 5;
  margin-right: 5;
  width: 80;
`;
