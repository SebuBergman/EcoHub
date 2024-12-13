import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import ReusableModal from "@/features/ui/reusableModal";

export default function UserSettings() {
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
                  id="filled-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Dislay Name"
                  variant="filled"
                ></TextField>
              ),
              onSubmit: () => {
                console.log("Submitted Modal 1");
                handleCloseModal();
              },
            })
          }
        >
          <Typography variant="h6">Display Name</Typography>
        </Button>
        <Typography variant="caption">Change your display name</Typography>
      </Stack>
      <Stack sx={{ pb: 2 }}>
        <Button
          sx={{ justifyContent: "start", p: "0" }}
          onClick={() =>
            handleOpenModal({
              title: "About description",
              subtitle: "Give a brief description of yourself",
              content: (
                <TextField
                  color="primary"
                  id="filled-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Avatar"
                  variant="filled"
                ></TextField>
              ),
              onSubmit: () => {
                console.log("Submitted Modal 1");
                handleCloseModal();
              },
            })
          }
        >
          <Typography variant="h6">About description</Typography>
        </Button>
      </Stack>
      <Stack sx={{ pb: 2 }}>
        <Button
          sx={{ justifyContent: "start", p: "0" }}
          onClick={() =>
            handleOpenModal({
              title: "Avatar Image",
              content: (
                <TextField
                  color="primary"
                  id="filled-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Avatar"
                  variant="filled"
                ></TextField>
              ),
              onSubmit: () => {
                console.log("Submitted Modal 1");
                handleCloseModal();
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
      <Stack sx={{ pb: 2 }}>
        <Button
          sx={{ justifyContent: "start", p: "0" }}
          onClick={() =>
            handleOpenModal({
              title: "Banner Image",
              content: (
                <TextField
                  color="secondary"
                  id="filled-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Banner"
                  variant="filled"
                ></TextField>
              ),
              onSubmit: () => {
                console.log("Submitted Modal 1");
                handleCloseModal();
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
