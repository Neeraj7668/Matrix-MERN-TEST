import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

const RequiredForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = {
      email: form.get("email"),
      password: form.get("password"),
    };
    if (!body.email || !body.password) {
      alert("Please enter your email");
      return false;
    }
    if (!body.password) {
      alert("Please enter your password");
      return false;
    }
    alert("success");

    console.log(body, "success");
  };
  return (
    <div>
      <h3>Require Form Validation</h3>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default RequiredForm;
