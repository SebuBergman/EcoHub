import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { getAuth, updateProfile } from "firebase/auth";
import ReusableModal from "@/features/ui/reusableModal";

export default function UserSettings() {
  const auth = getAuth();

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
