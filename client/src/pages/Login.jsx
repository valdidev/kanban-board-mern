import { Box, TextField } from "@material-ui/core";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => null;

  return (
    <>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          disabled={loading}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          type="password"
          disabled={loading}
        />
        <LoadingButton>
          Login
        </LoadingButton>
      </Box>
    </>
  );
};

export default Login;
