import styled, { keyframes } from "styled-components";

// animations
const rotateKeyframes = keyframes`
  from {
    transform: rotate(0);
  } to {
    transform: rotate(359deg);
  }
`;


const MaskLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(10,10,10, ${ props => props.shaded ? .5 : 0});
  z-index: 99999;
  &::after {
    position: absolute !important;
    animation: ${rotateKeyframes} .5s infinite linear;
    border: ${(props) => props.thickness || "2px"} solid ${(props) => props.color ? props.theme.findColor(props.color) : props.theme.colors.primary};
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: ${(props) => props.size || "2em"};
    width: ${(props) => props.size || "2em"};
    left: calc(50% - (${(props) => props.size || "2em"} / 2));
    top: calc(50% - (${(props) => props.size || "2em"} / 2));
  }
`;

export default MaskLoader;