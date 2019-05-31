import styled from "styled-components";
import { Flex } from "rebass";


const Pill = styled(Flex)`

  align-items: center;
  background: ${ (props) => props.theme.colors.conditionColors[props.conditionKey] };
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  height: 40px;
  width: 100%;
  justify-content: center;

`;

export default Pill;