import { Box, Divider, Stack, Typography } from "@mui/material";
import { ENV_ISSUES_CARD_DATA } from "./data";

export default function ENVIssuesCards() {
  return (
    <Box sx={{ mt: 2 }}>
      {ENV_ISSUES_CARD_DATA.map((item) => (
        <Box key={`${item.id}`}>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              pb: { xs: "0px", mb: "40px" },
            }}
          >
            <Stack flex="1">
              <Box
                component="img"
                key={`${item.id}`}
                src={`${item.path}`}
                loading="lazy"
                alt="Start Your Journey Today"
                sx={{
                  width: "100%",
                }}
              />
            </Stack>
            <Stack flex="3" p="40px">
              <Typography variant="h3">{item.heading}</Typography>
              <Typography variant="body1">{item.text}</Typography>
            </Stack>
          </Stack>
          <Divider sx={{ marginBottom: { xs: "0px", md: "40px" } }} />
        </Box>
      ))}
    </Box>
  );
}
