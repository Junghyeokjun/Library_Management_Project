import React from "react";
import { Box, Typography } from "@mui/material";

const Error = ({ errorTitle, errorDetails }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        padding: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ marginBottom: 2 }}>
        {errorTitle}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        {errorDetails}
      </Typography>
    </Box>
  );
};

export default Error;
