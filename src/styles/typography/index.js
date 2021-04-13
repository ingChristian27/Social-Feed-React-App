import styled, { css } from "styled-components";
import {
  fontSize,
  fontColor,
  fontWeight,
  fontStyle,
  fontStyleLight,
  fontStyleBold,
} from "../constant.style";

const Typography = styled.p`
  color: ${(props) => getColor(props)};
  font-family: Raleway;
  ${(props) => getFontStyle(props)};
`;
export default Typography;

const getFontStyle = (props) => {
  if (props.fontStyle)
    switch (props.fontStyle) {
      case "light":
        return fontStyleLight;
        break;
      case "bold":
        return fontStyleBold;
        break;
      default:
        return css`
          font-size: ${getFontSize(props)};
          font-weight: ${getWeight(props)}; 
          `;
        break;
    }
};

const getColor = (props) => props.color ? fontColor[props.color] : fontColor["primary"];

const getWeight = (props) => props.weight ? fontWeight[props.weight] : fontWeight["light"];

const getFontSize = (props) => props.variant ? fontSize[props.variant] : fontSize["1rem"];
