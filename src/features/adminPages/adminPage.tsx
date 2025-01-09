import { updateStoryInFirestore } from "@/app/services/firebase/hooks/useFirestore";
import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export default function AdminPage() {
  const dispatch = useAppDispatch();
  const stories = useAppSelector((state) => state.ecoStory.stories);

  const handleApprove = (id: string) => {
    dispatch(updateStoryInFirestore({ id, accepted: true }));
  };

  const handleReject = (id: string) => {
    dispatch(updateStoryInFirestore({ id, accepted: false }));
  };

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Admin Story Approval
      </Typography>
      {stories.map((story) => (
        <Card key={story.id} sx={{ mb: 2 }}>
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
              onClick={() => handleApprove(story.id)}
              disabled={story.accepted}
            >
              Approve
            </Button>
            <Button
              size="small"
              color="error"
              onClick={() => handleReject(story.id)}
            >
              Reject
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
