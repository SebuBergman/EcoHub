import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ReusableModal from "@/features/ui/reusableModal";

export default function UserSettings() {
  const auth = getAuth();
  const storage = getStorage();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    title: string;
    subtitle?: string;
    content: React.ReactNode;
    onSubmit?: () => void;
  }>({
    title: "",
    subtitle: "",
    content: null,
    onSubmit: undefined,
  });

  const [loading, setLoading] = useState(false);

  const handleOpenModal = (config: {
    title: string;
    subtitle?: string;
    content: React.ReactNode;
    onSubmit?: () => void;
  }) => {
    setModalConfig(config);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const updateDisplayName = async (newDisplayName: string) => {
    if (!auth.currentUser) return;
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: newDisplayName,
      });
      console.log("Display name updated:", newDisplayName);
    } catch (error) {
      console.error("Error updating display name:", error);
    } finally {
      setLoading(false);
      handleCloseModal();
    }
  };

  const uploadImage = async (
    file: File,
    folder: "avatars" | "banners"
  ): Promise<string | null> => {
    if (!auth.currentUser) return null;
    setLoading(true);

    const fileRef = ref(
      storage,
      `${folder}/${auth.currentUser.uid}/${file.name}`
    );
    try {
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);
      console.log(`${folder} image uploaded to:`, downloadURL);
      return downloadURL;
    } catch (error) {
      console.error(`Error uploading ${folder} image:`, error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarUpload = async (file: File) => {
    const avatarURL = await uploadImage(file, "avatars");
    if (avatarURL && auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, { photoURL: avatarURL });
        console.log("Avatar updated:", avatarURL);
      } catch (error) {
        console.error("Error updating avatar:", error);
      } finally {
        handleCloseModal();
      }
    }
  };

  const handleBannerUpload = async (file: File) => {
    const bannerURL = await uploadImage(file, "banners");
    if (bannerURL) {
      console.log("Banner updated:", bannerURL);
      // Save the banner URL to Firestore or your app's user profile database.
    }
    handleCloseModal();
  };

  return (
    <Box sx={{ maxWidth: "1120px", display: "flex", flexDirection: "column" }}>
      <Typography variant="h1">Settings</Typography>

      {/* Display Name */}
      <Stack sx={{ pb: 2 }}>
        <Button
          sx={{ justifyContent: "start", p: "0" }}
          onClick={() =>
            handleOpenModal({
              title: "Display Name",
              subtitle: "Change display name",
              content: (
                <TextField
                  color="primary"
                  id="display-name"
                  label="Display Name"
                  defaultValue={auth.currentUser?.displayName || ""}
                  variant="filled"
                />
              ),
              onSubmit: () => {
                const input = document.getElementById(
                  "display-name"
                ) as HTMLInputElement;
                if (input.value) {
                  updateDisplayName(input.value);
                }
              },
            })
          }
        >
          <Typography variant="h6">Display Name</Typography>
        </Button>
        <Typography variant="caption">Change your display name</Typography>
      </Stack>

      {/* Avatar */}
      <Stack sx={{ pb: 2 }}>
        <Button
          sx={{ justifyContent: "start", p: "0" }}
          onClick={() =>
            handleOpenModal({
              title: "Avatar Image",
              subtitle: "Upload a new avatar image",
              content: (
                <input
                  type="file"
                  id="avatar-upload"
                  accept="image/*"
                  style={{ display: "block" }}
                />
              ),
              onSubmit: () => {
                const input = document.getElementById(
                  "avatar-upload"
                ) as HTMLInputElement;
                if (input.files && input.files[0]) {
                  handleAvatarUpload(input.files[0]);
                }
              },
            })
          }
        >
          <Typography variant="h6">Avatar</Typography>
        </Button>
        <Typography variant="caption">
          Edit your avatar or upload an image
        </Typography>
      </Stack>

      {/* Banner */}
      <Stack sx={{ pb: 2 }}>
        <Button
          sx={{ justifyContent: "start", p: "0" }}
          onClick={() =>
            handleOpenModal({
              title: "Banner Image",
              subtitle: "Upload a new banner image",
              content: (
                <input
                  type="file"
                  id="banner-upload"
                  accept="image/*"
                  style={{ display: "block" }}
                />
              ),
              onSubmit: () => {
                const input = document.getElementById(
                  "banner-upload"
                ) as HTMLInputElement;
                if (input.files && input.files[0]) {
                  handleBannerUpload(input.files[0]);
                }
              },
            })
          }
        >
          <Typography variant="h6">Banner</Typography>
        </Button>
        <Typography variant="caption">
          Upload a profile background image
        </Typography>
      </Stack>

      {/* Loading Indicator */}
      {loading && (
        <Stack sx={{ alignItems: "center", my: 2 }}>
          <CircularProgress />
        </Stack>
      )}

      {/* Reusable Modal */}
      <ReusableModal
        open={modalOpen}
        onClose={handleCloseModal}
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        content={modalConfig.content}
        onSubmit={modalConfig.onSubmit}
      />
    </Box>
  );
}
