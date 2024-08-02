import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import React from "react";

const UserInfo = ({ user, readuser }) => {
  return (
    <>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box>
            <Typography variant="h5">{user.userName}</Typography>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Typography variant="subtitle1" gutterBottom>
              이메일 {user.email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", alignItems: "start", justifyContent: "end" }}
          >
            <Button>수정</Button>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ display: "flex" }}>
              <LockIcon />
              <Typography variant="subtitle1" sx={{ display: "inline" }}>
                비밀번호
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Button>수정</Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default UserInfo;
