import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import {
  updateDescription,
  addSocialLink,
  updateSocialLink,
  removeSocialLink,
  toggleNotifications,
} from "../store/userDataSlice";
import {RootState, useAppDispatch } from "@app/store/";
import { v4 as uuidv4 } from "uuid";

export default function UserDashboard() {
  const dispatch = useAppDispatch();
  const { description, socialLinks, notifications } = useSelector(
    (state: RootState) => state.userData
  );

  const [newLinkUrl, setNewLinkUrl] = useState("");

  const handleAddSocialLink = () => {
    if (newLinkUrl.trim()) {
      dispatch(addSocialLink({ id: uuidv4(), url: newLinkUrl.trim() }));
      setNewLinkUrl("");
    }
  };

  const handleUpdateSocialLink = (id: string, url: string) => {
    dispatch(updateSocialLink({ id, url }));
  };

  const handleRemoveSocialLink = (id: string) => {
    dispatch(removeSocialLink(id));
  };

  const handleToggleNotifications = () => {
    dispatch(toggleNotifications());
  };

  return (
    <Box sx={{ maxWidth: "600px", mx: "auto", mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        User Dashboard
      </Typography>

      {/* Description */}
      <Stack spacing={2}>
        <Typography variant="body1">Description:</Typography>
        <TextField
          fullWidth
          value={description}
          onChange={(e) => dispatch(updateDescription(e.target.value))}
          placeholder="Enter a description"
        />
      </Stack>

      {/* Social Links */}
      <Stack spacing={2} sx={{ mt: 4 }}>
        <Typography variant="body1">Social Links:</Typography>
        {socialLinks.map((link) => (
          <Stack key={link.id} direction="row" alignItems="center" spacing={1}>
            <TextField
              fullWidth
              value={link.url}
              onChange={(e) => handleUpdateSocialLink(link.id, e.target.value)}
              placeholder="Enter social link URL"
            />
            <IconButton onClick={() => handleRemoveSocialLink(link.id)}>
              X
            </IconButton>
          </Stack>
        ))}
        <Stack direction="row" alignItems="center" spacing={1}>
          <TextField
            fullWidth
            value={newLinkUrl}
            onChange={(e) => setNewLinkUrl(e.target.value)}
            placeholder="Add a new social link"
          />
          <Button variant="contained" onClick={handleAddSocialLink}>
            Add
          </Button>
        </Stack>
      </Stack>

      {/* Notifications */}
      <Stack direction="row" alignItems="center" sx={{ mt: 4 }}>
        <Typography variant="body1">Enable Notifications:</Typography>
        <Checkbox
          checked={notifications}
          onChange={handleToggleNotifications}
        />
      </Stack>
    </Box>
  );
};
