import { Box, Button, Stack, Typography } from "@mui/material";

function HeroBox() {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: 1280,
        width: "100%",
        margin: "auto",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          bgcolor: "white",
          position: { md: "absolute" },
          bottom: -59,
          right: 0,
          top: "auto",
          left: "auto",
          width: { xs: "100%", md: "520px" },
          height: { xs: 500, md: 520 },
          borderRadius: 8,
        }}
      >
        <Stack sx={{ flexWrap: "wrap" }}>
          <Stack sx={{ padding: "110px 40px 0px 40px" }}>
            <Typography variant="h1" pb={2}>
              EcoHub: Centre for Sustainable Living
            </Typography>
            <Typography variant="body1">
              At EcoHub, we believe in the power of collective action to bring
              about positive change on our planet. Our mission is to empower
              people of all ages to adopt sustainable lifestyles and promote a
              healthier and greener future.
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ position: "absolute", bottom: 0, width: "100%" }}
          >
            <Button
              sx={{
                flexDirection: "row",
                bgColor: "white",
                border: "none",
                fontWeight: "bold",
                borderTop: "1px solid #cdcdcd",
                borderBottom: "3px solid #248823",
                height: "60px",
                padding: "0px 20px 0px 20px",
              }}
            >
              HOW TO GET INVOLVED
            </Button>
            <Button
              sx={{
                flex: 1,
                flexDirection: "row",
                bgColor: "white",
                border: "none",
                fontWeight: "bold",
                borderTop: "1px solid #cdcdcd",
                borderBottom: "3px solid #248823",
                height: "60px",
                padding: "0px 20px 0px 20px",
              }}
            >
              {" "}
              TELL US YOUR STORY
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default HeroBox;
