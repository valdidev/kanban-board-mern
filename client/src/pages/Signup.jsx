import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="ConfirmPassword"
          name="confirmPassword"
          type="password"
          disabled={loading}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
          loading={loading}
        >
          Signup
        </LoadingButton>
      </Box>
      <Button component={Link} to="/login" sx={{ textTransform: "none" }}>
        Already have an account? Login
      </Button>
    </>
  );
};

export default Signup;
