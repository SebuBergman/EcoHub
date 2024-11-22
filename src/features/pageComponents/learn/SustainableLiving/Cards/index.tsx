import { Box, Stack, Typography } from "@mui/material";
import { SUSTAINABLE_CARD_DATA } from "./data";
import { Colors } from "@/app/config/styles";

export default function SustainabilityCards() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
      {SUSTAINABLE_CARD_DATA.map((item) => (
        <Box
          key={item.id}
          sx={{
            maxWidth: "430px",
            width: "100%",
            flex: "1 1 calc(33.333% - 20px)", // Adjust width for 3 items in a row with a gap
            border: "1px solid",
            borderRadius: "15px",
            borderColor: Colors.primaryGrey,
          }}
        >
          <Stack direction="column">
            <Stack flex="1">
              <img
                key={`${item.id}`}
                src={`${item.path}`}
                loading="lazy"
                style={{
                  width: "100%",
                  borderRadius: "15px 15px 0px 0px",
                }}
              />
            </Stack>
            <Stack flex="3" p="40px">
              <Typography variant="h5" pb="20px">
                {item.heading}
              </Typography>
              <Typography variant="body1">{item.text}</Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
