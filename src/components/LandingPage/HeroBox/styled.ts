import { ButtonTextSemi, MainTitle, TextLight } from "@components/ui/Typography/Typography";
import styled from "styled-components";

export const ImageBoxContainer = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  position: absolute;
  bottom: -59px;
  right: 0;
  top: auto;
  left: auto;
  width: 520px;
  height: 520px;
  border-radius: 8px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
  padding-top: 110px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const HeroTitle = styled(MainTitle)`
  text-align: center;
`;

export const HeroText = styled(TextLight)`
  text-align: center !important;
  padding: 0px 30px 0px 30px !important;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

export const Button = styled(ButtonTextSemi)`
  flex-direction: row;
  background-color: white;
  border: none;
  font-weight: bold;
  border-top: 1px solid #cdcdcd;
  border-bottom: 3px solid #248823;
  height: 60px;
  padding: 0px 20px 0px 20px;
`;