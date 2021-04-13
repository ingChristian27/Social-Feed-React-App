import styled from "styled-components";
import { fontSize, fontColor, backgroundColors, fontWeight } from "../../../styles/constant.style";

const ButtonPromotion = styled.button`
    padding: 20px 70px 20px 70px;
    color: ${fontColor["secundary"]};
    font-size: ${fontSize["h5"]};
    background: ${backgroundColors["green"]};
    border: none;
    cursor: pointer;
    font-weight: ${fontWeight["bold"]};
`;
export default ButtonPromotion;
