import { FontFamilies } from "@app/config/styles/FontFamilies";
import { FontWeights } from "@app/config/styles/FontWeights";
import { styled } from "styled-components";

export const MainTitle = styled.h1`
  font-family: ${() => FontFamilies.publicSans}, sans-serif;
  font-weight: ${() => FontWeights.bold};
`;

export const SectionTitle = styled.h2`
  font-family: ${() => FontFamilies.publicSans}, sans-serif;
  font-weight: ${() => FontWeights.bold};
`;

export const SectionSubtitle = styled.h3`
  font-family: ${() => FontFamilies.publicSans}, sans-serif;
  font-weight: ${() => FontWeights.semibold};
`;

export const TextLight = styled.p`
  font-family: ${() => FontFamilies.inter}, sans-serif;
  font-weight: ${() => FontWeights.light};
`;

export const Text = styled.span`
  font-family: ${() => FontFamilies.inter}, sans-serif;
  font-weight: ${() => FontWeights.regular};
`;

export const SubText = styled.span`
  font-family: ${() => FontFamilies.inter}, sans-serif;
  font-weight: ${() => FontWeights.regular};
`;

export const ButtonTextSemi = styled.button`
  font-family: ${() => FontFamilies.inter}, sans-serif;
  font-weight: ${() => FontWeights.semibold};
`;
