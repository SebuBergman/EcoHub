import { Avatar, Box, Stack, Typography } from "@mui/material";
import { EcoStory as EcoStoryTypes } from "../types";
import { Colors } from "@app/config/styles";
import { timeAgo } from "@app/services/date/formatDate";

interface Props {
  story: EcoStoryTypes;
}

export default function UserStory({ story }: Props) {
  const userInitial = story.username?.split(" ")[0][0];

  return (
    <Box
      sx={{
        mb: 3,
        padding: { xs: "25px 20px 25px 20px", md: "25px 25px 25px 25px" },
        borderRadius: "30px",
        background: "#FFFFFF",
        "&:hover": {
          background: "#F3F3F3",
        },
      }}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
        <Avatar sx={{ height: 48, width: 48, background: Colors.disabled }}>
          {userInitial}
        </Avatar>
        <Typography
          variant="body1"
          sx={{ color: Colors.black, paddingLeft: "8px" }}
        >
          {story.username}
        </Typography>
        <Typography variant="body1" sx={{ color: Colors.black }}>
          -
        </Typography>
        <Typography variant="body1" sx={{ color: Colors.black }}>
          {timeAgo(story.submissionDate)}
        </Typography>
      </Stack>
      <Typography variant="h1" sx={{ pt: 2 }}>
        {story.title}
      </Typography>
      <Typography sx={{ pt: 1 }}>{story.content}</Typography>
    </Box>
  );
}
