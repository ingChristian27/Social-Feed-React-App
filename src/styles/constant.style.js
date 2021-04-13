import { css } from "styled-components";

export const fontSize = {
    h1: "6rem",
    h2: "3.75rem",
    h3: "3rem",
    h4: "2.125rem",
    h5: "1.3rem",
    h6: "1rem",
};

export const fontColor = {
    primary: "#333333",
    secundary: "#ffffff",
    purple: "#6424ff",
};

export const backgroundColors = {
    primary: "#6424ff",
    secundary: "#ffffff",
    green: "#06F48A",
};

export const fontWeight = {
    light: "500",
    medium: "700",
    bold: "900",
};

export const lineHeight = {
    light: "34px",
    bold: "61.75px",
};

export const fontStyle = {
    light: { weight: fontWeight["light"], size: fontSize["h5"] },
    bold: { weight: fontWeight["bold"], size: fontSize["h3"] },
};

export const backgroundCover = css`
    height: 100%;
    background-position: center;
    background-size: cover;
`;

export const fontStyleLight = css`
  font-size: ${fontSize["h5"]};
  font-weight: ${fontWeight["light"]};
  line-height ${lineHeight["light"]};
`;

export const fontStyleBold = css`
  font-size: ${fontSize["h3"]};
  font-weight: ${fontWeight["bold"]};
  line-height ${lineHeight["bold"]};
`;
