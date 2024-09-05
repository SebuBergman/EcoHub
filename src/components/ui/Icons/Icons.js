import { styled } from "styled-components";
import { ReactComponent as SendIcon } from "assets/icons/send.svg";

const Send = styled(SendIcon)`
  fill: ${(props) => props.color || "black"};
  stroke: ${(props) => props.color || "black"};
`;

export {
  Send,
};
