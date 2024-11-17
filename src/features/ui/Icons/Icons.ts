import { styled } from "styled-components";

const Send = styled(SendIcon)`
  fill: ${(props) => props.color || "black"};
  stroke: ${(props) => props.color || "black"};
`;

export {
  Send,
};
