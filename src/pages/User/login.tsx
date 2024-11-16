import { APP_NAME } from "@/app/config/constants";
import { Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <>
      <Typography component="h1" variant="h2" mb={1}>
        Login
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Login to access {APP_NAME}
      </Typography>
    </>
  );
}
