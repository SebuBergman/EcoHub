import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { selectUser } from "@features/auth/store/authSlice";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import {
  updateDescription,
  updateAvatar,
  updateSocialLink,
  removeSocialLink,
} from "../../userDataSlice";

export default function UserDashboard() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [editOpen, setEditOpen] = useState(false);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [socialLinks, setSocialLinks] = useState([{ id: uuidv4(), url: "" }]);

  const handleAddSocialLink = () => {
    setSocialLinks((prev) => [...prev, { id: uuidv4(), url: "" }]);
  };

  const handleRemoveSocialLink = (id: string) => {
    setSocialLinks((prev) => prev.filter((link) => link.id !== id));
    dispatch(removeSocialLink(id));
  };

  const handleEditSubmit = () => {
    dispatch(updateDescription(description));
    socialLinks.forEach((link) => {
      if (link.url.trim()) dispatch(updateSocialLink(link));
    });
    setEditOpen(false);
  };

  const handleAvatarUpload = (file: File) => {
    // Reuse `uploadImage` functionality here
    /*uploadImage(file, "avatars").then((uploadedFile) => {
      if (uploadedFile) {
        dispatch(updateAvatar(uploadedFile.url || ""));
      }
    });*/
    setAvatarModalOpen(false);
  };

  return (
    <Box sx={{ maxWidth: "600px", mx: "auto", mt: 4 }}>
      <Stack direction="row" gap="20px" alignItems={"center"}>
        <Avatar
          sx={{ width: 72, height: 72 }}
          onClick={() => setAvatarModalOpen(true)}
        />
        <Typography variant="h1">{user?.displayName}</Typography>
        <Stack>
          <Button onClick={() => setEditOpen(true)}>Edit</Button>
        </Stack>
      </Stack>
      <Stack sx={{ mt: 4 }}>
        <Typography variant="body1">Description:</Typography>
        <Typography variant="body1">{description}</Typography>
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

      {/* Edit Modal */}
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

      {/* Avatar Upload Modal */}
      <Dialog open={avatarModalOpen} onClose={() => setAvatarModalOpen(false)}>
        <DialogTitle>Upload Avatar</DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              e.target.files && handleAvatarUpload(e.target.files[0])
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAvatarModalOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
