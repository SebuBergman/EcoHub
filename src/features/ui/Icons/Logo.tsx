import { Box, Typography } from "@mui/material";

import { APP_NAME } from "@config/constants";
import { Colors } from "@/app/config/styles";
import Logo from "../Logo.png";

interface Props {
  isMinimized?: boolean;
}

export default function AppLogo({ isMinimized }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: "100%",
        gap: 2.5,
      }}
    >
      <img src={Logo} />
      {!isMinimized && (
        <Typography variant="h6" sx={{ color: Colors.black }}>
          {APP_NAME}
        </Typography>
      )}
    </Box>
  );
}
