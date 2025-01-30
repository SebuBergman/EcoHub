import { Box, Stack, Typography } from "@mui/material";
import { SUSTAINABLE_CARD_DATA } from "./data";
import { Colors } from "@/app/config/styles";

export default function SustainabilityCards() {
  return (
    <Box sx={{ display: "flex", flexWrap: {xs: "nowrap", md: "wrap"}, flexDirection: {xs: "column", md: "row"}, gap: {xs: 2, md: 5}, margin: {xs: 2}}}>
      {SUSTAINABLE_CARD_DATA.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            maxWidth: "430px",
            width: "100%",
            flex: "1 1 calc(33.333% - 20px)", // Adjust width for 3 items in a row with a gap
            border: "1px solid",
            borderRadius: "15px",
            borderColor: Colors.primaryGrey,
            flexDirection: {xs: "column", md: "row"}
          }}
        >
          <Stack direction="column">
            <Stack flex="1">
              <Box
                component="img"
                key={`${item.id}`}
                src={`${item.path}`}
                loading="lazy"
                alt="Start Your Journey Today"
                sx={{
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
