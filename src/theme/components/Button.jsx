import styled, { css } from "styled-components";
import { Button as Base } from "rebass";

// button styles based on type
const PrimaryButtonStyles = css`
  background: ${ (props) =>  props.theme.colors.logikcullButtonBlue};
  border: 2px solid ${ (props) => props.theme.colors.logikcullButtonBlue };
  color: #fff;
  transition: all .1s ease-in-out;
  &&:hover{
    background: ${ (props) =>  props.theme.colors.logikcullButtonBlue_hover};
    border: 2px solid ${ (props) => props.theme.colors.logikcullButtonBlue_hover };
  }
`;

const SecondaryButtonStyles = css`
  background: ${ (props) =>  props.theme.colors.logikcullButtonRed};
  border: 2px solid ${ (props) => props.theme.colors.logikcullButtonRed };
  color: #fff;
  transition: all .1s ease-in-out;
  &&:hover{
    background: ${ (props) =>  props.theme.colors.logikcullButtonRed_hover};
    border: 2px solid ${ (props) => props.theme.colors.logikcullButtonRed_hover };
  }
`;

const OutlineButtonStyles = css`
  background: #fff;
  border: 2px solid ${ (props) => props.theme.colors.logikcullButtonBlue_hover };
  color: ${ (props) => props.theme.colors.logikcullButtonBlue_hover };
  transition: all .1s ease-in-out;
  &&:hover{
    background: ${ (props) =>  props.theme.colors.logikcullButtonBlue };
    border: 2px solid ${ (props) => props.theme.colors.logikcullButtonBlue };
    color: #fff;
  }
`;

const Button = styled(Base)`

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 14px;
  height: 40px;
  width: 100%;
  cursor: pointer;

  -webkit-appearance: none !important;

  ${(props) =>
    props.variant === "primary" && PrimaryButtonStyles ||
    props.variant === "secondary" && SecondaryButtonStyles ||
    props.variant === "outline" && OutlineButtonStyles
  }

`;

Button.defaultProps = {
  variant: "primary"
};

export default Button;