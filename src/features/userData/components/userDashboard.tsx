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
  updateAvatar,
  updateDescription,
  updateSocialLink,
} from "../userDataSlice";
import { SocialLink, UserData } from "../types";
import { getAuth } from "firebase/auth";
import { saveUserDataToFirestore, uploadImageToFirebaseStorage } from "@/app/services/firebase/hooks/useStorage";

interface Props {
  avatar: UserData[];
  description: UserData[];
  socialLinks: UserData[];
}

export default function UserDashboard({ avatar, description, socialLinks }: Props) {
  const user = useAppSelector((state) => state.auth.user);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [editOpen, setEditOpen] = useState(false);
  const [description, setDescription] = useState(description);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>();

  const handleFileUploads = async (file: File) => {
    if (!user?.uid) return;

    setUploading(true);
    try {
      const downloadURL = await uploadImageToFirebaseStorage(
        user.uid,
        file,
        "avatars"
      );
      dispatch(updateAvatar(downloadURL));

      // Update Firestore
      await saveUserDataToFirestore(user.uid, {
        ...userData,
        avatar: downloadURL,
      });

      setUploading(false);
    } catch (error) {
      console.error("Error uploading avatar:", error);
      setUploading(false);
    }
  };

  const handleEditSubmit = async () => {
    if (!user?.uid) return;

    dispatch(updateDescription(description));
    socialLinks.forEach((link) => {
      if (link.url.trim()) dispatch(updateSocialLink(link));
    });

    // Save data to Firestore
    await saveUserDataToFirestore(user.uid, {
      ...userData,
      description,
      socialLinks,
    });

    setEditOpen(false);
  };

  const handleAddSocialLink = () => {
    setSocialLinks((prev) => [...prev, { id: crypto.randomUUID(), url: "" }]);
  };

  const handleRemoveSocialLink = (id: string) => {
    setSocialLinks((prev) => prev.filter((link) => link.id !== id));
  };

  return (
    <Box sx={{ maxWidth: "600px", mx: "auto", mt: 4 }}>
      <Stack direction="row" gap="20px" alignItems="center">
        <label htmlFor="avatar-upload">
          <Avatar
            src={avatar || ""}
            sx={{
              width: 72,
              height: 72,
              cursor: "pointer",
              border: "2px solid #1976d2",
            }}
          />
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) =>
            e.target.files && handleFileUploads(e.target.files[0])
          }
        />
        <Typography variant="h1">{user?.displayName || "User"}</Typography>
      </Stack>
      {uploading && (
        <Box sx={{ mt: 2, width: "100%" }}>
          <Typography variant="body2">Uploading: {uploadProgress}%</Typography>
          <CircularProgress variant="determinate" value={uploadProgress} />
        </Box>
      )}
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
