import { Typography } from "@mui/material";
import React, { forwardRef } from "react";

const MyPageTitle = forwardRef(({ children }, ref) => {
  return (
    <Typography
      ref={ref}
      sx={{
        borderBottom: "1px solid black",
        pb: "0.6rem",
        mb: "1rem",
        mt: "3rem",
        fontWeight: "bold",
        fontSize: "1.5rem",
      }}
    >
      {children}
    </Typography>
  );
});

export default MyPageTitle;
