import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  updateDescription,
  updateSocialLink,
} from "../userDataSlice";
import { SocialLink, UserData } from "../types";
import { saveUserDataToFirestore } from "@/app/services/firebase/hooks/useStorage";
import { v4 as uuidv4 } from "uuid";

interface Props {
  description: UserData[];
  socialLinks: SocialLink[];
}

export default function UserDashboard(props: Props) {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(props.socialLinks || []);
  const [description, setDescription] = useState(props.description || "");

  const [editOpen, setEditOpen] = useState(false);

  const handleEditSubmit = async () => {
    if (!user?.uid) return;

    dispatch(updateDescription(props.description));
    socialLinks.forEach((link) => {
      if (link.url.trim()) dispatch(updateSocialLink(link));
    });

  const handleAddSocialLink = () => {
    setSocialLinks((prev) => [...prev, { id: uuidv4(), url: "" }]);
  };

  const handleRemoveSocialLink = (id: string) => {
    setSocialLinks((prev) => prev.filter((link) => link.id !== id));
  };

  return (
    <Box sx={{ maxWidth: "600px", mx: "auto", mt: 4 }}>
      <Stack direction="row" gap="20px" alignItems="center">
        <label htmlFor="avatar-upload">
          <Avatar
            sx={{
              width: 72,
              height: 72,
              cursor: "pointer",
              border: "2px solid #1976d2",
            }}
          />
        </label>
        <Typography variant="h1">{user?.displayName || "User"}</Typography>
      </Stack>
      <Stack sx={{ mt: 4 }}>
        <Typography variant="body1">Description:</Typography>
        <Typography variant="body1">{props.description}</Typography>
      </Stack>
      <Stack sx={{ mt: 4 }}>
        <Typography variant="body1">Social Links:</Typography>
        {socialLinks.map((link) => (
          <Stack key={link.id} direction="row" alignItems="center">
            <Typography variant="body1">{link.url}</Typography>
            <IconButton onClick={() => handleRemoveSocialLink(link.id)}>
              X
            </IconButton>
          </Stack>
        ))}
      </Stack>
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {socialLinks.map((link, index) => (
            <TextField
              key={link.id}
              label={`Social Link ${index + 1}`}
              fullWidth
              value={link.url}
              onChange={(e) =>
                setSocialLinks((prev) =>
                  prev.map((l) =>
                    l.id === link.id ? { ...l, url: e.target.value } : l
                  )
                )
              }
            />
          ))}
          <Button onClick={handleAddSocialLink}>Add Social Link</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditSubmit}>Save</Button>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
}