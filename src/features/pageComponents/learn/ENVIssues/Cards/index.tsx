import { Box, Divider, Stack, Typography } from "@mui/material";
import { ENV_ISSUES_CARD_DATA } from "./data";

export default function ENVIssuesCards() {
  return (
    <Box>
      {ENV_ISSUES_CARD_DATA.map((item) => (
        <Box>
          <Stack direction="row" pb="40px">
            <Stack flex="1">
              <img
                key={`${item.id}`}
                src={`${item.path}`}
                loading="lazy"
                style={{
                  width: "400px",
                }}
              />
            </Stack>
            <Stack flex="3" p="40px">
              <Typography variant="h3">{item.heading}</Typography>
              <Typography variant="body1">{item.text}</Typography>
            </Stack>
          </Stack>
          <Divider sx={{marginBottom: "40px"}}/>
        </Box>
      ))}
    </Box>
  );
}
