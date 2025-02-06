import { AppRoutes } from "@app/config/routes";
import Footer from "@features/footer";
import Header from "@features/header";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotYetFinished() {
  return (
    <div>
      <Header />
      <Stack
        sx={{
          p: {
            xs: "20px 20px 20px 20px",
            md: "50px 10px",
          },
          justifyContent: { xs: "left", md: "center" },
          alignItems: { xs: "left", md: "center" },
          margin: "auto",
        }}
      >
        <Typography variant="h6">
          This page isn't implemented yet! Be patient!
        </Typography>
        <Typography variant="body2" sx={{ pt: 4 }}>
          Here is a list of implemented pages:
        </Typography>
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            cursor: "pointer",
          }}
        >
          <li>
            <a href={AppRoutes.discussionForum}>Environmental Issues</a>
          </li>
          <li>
            <a href={AppRoutes.discussionForum}>Sustainable Living Tips</a>
          </li>
          <li>
            <a href={AppRoutes.discussionForum}>Discussion Forum</a>
          </li>
          <li>
            <a href={AppRoutes.missionTeam}>Mission & Team</a>
          </li>
          <li>
            <a href={AppRoutes.pressAndMedia}>Press & Media</a>
          </li>
          <li>
            <a href={AppRoutes.login}>Login & register + account pages</a>
          </li>
        </ul>
        <Typography variant="body1" sx={{ pt: 4 }}>
          <Link to="/">Click here to go back to home page</Link>
        </Typography>
      </Stack>
      <Footer />
    </div>
  );
}
