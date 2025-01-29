import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa6";

import "./styles.scss";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { AppRoutes } from "@/app/config/routes";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#f9fafb" }} mt={4} mb={4}>
      <Stack sx={{ maxWidth: "1280px", width: "100%", margin: "auto" }}>
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            padding: { xs: "20px", md: "48px 0px 48px 0px" },
          }}
        >
          <Stack sx={{ flex: { md: 2 }, pb: { xs: 2 } }}>
            <Typography variant="h6">Subscribe to our newsletter</Typography>
            <Typography variant="subtitle1">
              Stay in touch and be part of the sustainability debate. Follow us
              on social media, subscribe to our newsletter and join our
              community.
            </Typography>
          </Stack>
          <Stack sx={{ flex: { md: 2 }, flexDirection: "row", height: "58px" }}>
            <TextField
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email here"
              fullWidth
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2e7d32",
                ml: 1,
                padding: { xs: "0px 15px", md: "0px 25px" },
              }}
            >
              Tilaa
            </Button>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            padding: { xs: "0px 20px" },
            gap: "10px",
          }}
        >
          <Stack sx={{ flex: { md: 1 }, flexDirection: { xs: "column" } }}>
            {/*<Logo />*/}
            <Typography variant="h6">EcoHub</Typography>
            <Typography variant="subtitle1">
              Together towards a more sustainable tomorrow.
            </Typography>
          </Stack>
          <Stack
            sx={{ flex: { md: 2 }, flexDirection: { xs: "column", md: "row" } }}
            gap={1}
          >
            <Stack sx={{ flex: { md: 1 }, ml: { xs: 0, md: "5px" } }} gap={1}>
              <Stack>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Learn
                </Typography>
                <ul className="footer_ul">
                  <li>
                    <a href={AppRoutes.envIssues}>Environmental Issues</a>
                  </li>
                  <li>
                    <a href={AppRoutes.sustainableLiving}>
                      Sustainable Living Tips
                    </a>
                  </li>
                  <li>Green Innovations</li>
                </ul>
              </Stack>
              <Stack>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Watch
                </Typography>

                <ul className="footer_ul">
                  <li>Videos</li>
                  <li>Success Stories</li>
                </ul>
              </Stack>
              <Stack>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Interact
                </Typography>

                <ul className="footer_ul">
                  <li>Quizzes & Challenges</li>
                  <li>
                    <a href={AppRoutes.discussionForum}>Discussion Forum</a>
                  </li>
                </ul>
              </Stack>
            </Stack>
            <Stack sx={{ flex: { md: 1 }, ml: { xs: 0, md: "5px" } }} gap={1}>
              <Stack>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Resource
                </Typography>
                <ul className="footer_ul">
                  <li>Downloads & Library</li>
                  <li>Carbon Footprint Tool</li>
                  <li>Environmental Impact Assessment</li>
                </ul>
              </Stack>
              <Stack>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Engage
                </Typography>
                <ul className="footer_ul">
                  <li>User Profiles</li>
                  <li>Signs & Achievements</li>
                  <li>Submit Your Story</li>
                </ul>
              </Stack>
            </Stack>
            <Stack sx={{ flex: { md: 1 }, ml: { xs: 0, md: "5px" } }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                About
              </Typography>
              <ul className="footer_ul">
                <li>
                  <a href={AppRoutes.missionTeam}>Mission & Team</a>
                </li>
                <li>News & Updates</li>
                <li>
                  <a href={AppRoutes.pressAndMedia}>Press & Media</a>
                </li>
              </ul>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{ p: { xs: "25px 20px", md: "0px 48px" }, flexDirection: {xs: "column", md: "row"}, alignItems: {xs: "center"} }} gap={1}
        >
          <Stack sx={{ flex: 1, flexWrap: "flex-start" }}>
            <p>© 2024 EcoHub.</p>
          </Stack>
          <Stack
            sx={{ flex: 2, flexWrap: "flex-end", flexDirection: "row" }}
            gap={1}
          >
            <FaInstagram size={24} />
            <FaFacebook size={24} />
            <FaLinkedin size={24} />
            <FaXTwitter size={24} />
            <FaYoutube size={24} />
            <FaGithub size={24} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
