import { SubText, TextLight } from "components/ui/Typography/Typography";
import styled from "styled-components";

export const ImageBoxContainer = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageBoxWrapper = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;