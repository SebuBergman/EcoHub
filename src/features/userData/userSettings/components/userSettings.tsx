import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import { getAuth, updateProfile } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import ReusableModal from "@/features/ui/reusableModal";
import { userImageFile, UserSettings } from "../../types";

interface Props {
  userSettings: UserSettings;
  onSave: (user: UserSettings) => void;
}

interface State {
  avatar: userImageFile[];
  banner: userImageFile[];
  uploadProgress: number | null;
}

const defaultState: State = {
  avatar: [],
  banner: [],
  uploadProgress: null,
};

export default function UserSettings(props: Props) {
  const [state, setState] = useState<State>(defaultState);
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

  const uploadImage = async (
    file: File,
    folder: "avatars" | "banners"
  ): Promise<userImageFile | null> => {
    if (!auth.currentUser) return null;
    setLoading(true);

    const fileRef = ref(
      storage,
      `${folder}/${auth.currentUser.uid}/${file.name}`
    );
    const uploadTask = uploadBytesResumable(fileRef, file);

    return new Promise((resolve) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setState((prev) => ({
            ...prev,
            uploadProgress: Math.round(progress),
          }));
        },
        (error) => {
          console.error(`Error uploading ${folder} image:`, error);
          setLoading(false);
          resolve(null);
        },
        async () => {
          const storagePath = uploadTask.snapshot.ref.fullPath;
          console.log(`${folder} image uploaded successfully:`, storagePath);

          // Return uploaded file with storage path but no URL yet
          const uploadedFile: userImageFile = {
            fileName: file.name,
            storagePath,
            url: null,
          };

          resolve(uploadedFile);
          setLoading(false);
          setState((prev) => ({ ...prev, uploadProgress: null }));
        }
      );
    });
  };

  const handleAvatarUpload = async (file: File) => {
    const uploadedImage = await uploadImage(file, "avatars");
    if (uploadedImage) {
      setState((prev) => ({
        ...prev,
        avatar: [uploadedImage],
      }));

      console.log(
        "Avatar uploaded with storage path:",
        uploadedImage.storagePath
      );
    }
    handleCloseModal();
  };

  const handleBannerUpload = async (file: File) => {
    const uploadedImage = await uploadImage(file, "banners");
    if (uploadedImage) {
      setState((prev) => ({
        ...prev,
        banner: [uploadedImage],
      }));

      console.log(
        "Banner uploaded with storage path:",
        uploadedImage.storagePath
      );
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
                  updateProfile(auth.currentUser!, {
                    displayName: input.value,
                  });
                  handleCloseModal();
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
        {state.uploadProgress !== null && (
          <LinearProgress variant="determinate" value={state.uploadProgress} />
        )}
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
        {state.uploadProgress !== null && (
          <LinearProgress variant="determinate" value={state.uploadProgress} />
        )}
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
