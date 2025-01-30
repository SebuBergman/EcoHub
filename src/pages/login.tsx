import { Stack, Typography } from "@mui/material";

import { APP_NAME } from "@config/constants";
import LoginForm from "@features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Stack sx={{m: 0, p: 0}}>
        <Typography component="h1" variant="h2" mb={1}>
          Login
        </Typography>
        <Typography color="text.secondary" mb={4}>
          Login to access {APP_NAME}
        </Typography>
        <LoginForm />
      </Stack>
    </>
  );
}
