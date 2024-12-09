import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  onSubmit?: () => void;
}

export default function ReusableModal({
  open,
  onClose,
  title,
  subtitle,
  content,
  onSubmit,
}: Props) {
  return (
    // Ensure the component properly returns JSX
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="caption">{subtitle}</Typography>
        <Box mt={2}>{content}</Box>
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{ mt: 2, mr: 2 }}
        >
          Cancel
        </Button>
        {onSubmit && (
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        )}
      </Box>
    </Modal>
  );
}
