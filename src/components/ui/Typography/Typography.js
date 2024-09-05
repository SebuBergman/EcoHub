import { styled } from "styled-components";

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.publicSans}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 2.75rem;
  line-height: 3.125rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.publicSans}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 2rem;
  line-height: 2.75rem;
`;

export const SectionSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.publicSans}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const TextLight = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 1rem;
  line-height: 1.625rem;
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 1rem;
  line-height: 1.625rem;
`;

export const SubText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 20px;
  line-height: 24px;
`;

export const ButtonTextSemi = styled.button`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: 15px;
  line-height: 20px;
`;
