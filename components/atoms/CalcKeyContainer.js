import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import * as colors from "../../styles/colors";

export const CalcKeyContainer = styled.TouchableOpacity`
  background-color: ${props => (props.isConvert ? colors.mainColor : "transparent")};
  border: ${colors.mainColor};
  border-radius: 7;
  height: 40;
  justify-content: center;
  margin-right: 10;
  margin-bottom: 15;
  width: 60;
`;
