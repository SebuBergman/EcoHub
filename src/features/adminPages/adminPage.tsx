import { useAppSelector } from "@/app/store";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export default function AdminPage() {
  const stories = useAppSelector((state) => state.ecoStory.stories);

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Admin Story Approval
      </Typography>
      {stories.map((story) => (
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{story.title}</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {story.content}
            </Typography>
            <Typography
              variant="caption"
              color={story.accepted ? "green" : "orange"}
            >
              {story.accepted ? "Approved" : "Pending Approval"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="success"
              disabled={story.accepted}
            >
              Approve
            </Button>
            <Button
              size="small"
              color="error"
            >
              Reject
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
