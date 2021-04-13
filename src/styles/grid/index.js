import styled from "styled-components";
const mobile = `@media (max-width: 995px)`;

const Grid = styled.section`
  width: ${(props) => getSize(props.lg)}%;
  position: relative;
  float: left;
  ${mobile} {
    width: ${(props) => getSize(props.xs)}%;
  }
`;
export default Grid;

const getSize = (size) => (size ? (size * 100) / 12 : 100);
