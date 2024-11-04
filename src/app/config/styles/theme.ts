import { createTheme } from "@mui/material";
import { FontFamilies } from "./FontFamilies";
import { FontWeights } from "./FontWeights";

export const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
    error: {
      main: "#EB5757",
    },
  },
});

theme.typography.h1 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.bold,
};

theme.typography.h2 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.semibold,
};

theme.typography.h4 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.semibold,
};

theme.typography.h5 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.semibold,
};

theme.typography.h6 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.semibold,
};

theme.typography.body1 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.regular,
};

theme.typography.body2 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.semibold,
};

theme.typography.subtitle1 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.regular,
};

theme.typography.subtitle2 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.semibold,
};

theme.typography.caption = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.regular,
};

export default theme;