import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import FormDialog from "@components/common/FormDialog";

const UserInfo = ({ user, readuser, updateUser, id }) => {
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [title, setTitle] = useState("ㅤ");
  const [option, setOption] = useState("email");
  const onHandleClick = (e) => {
    setOption(e.target.getAttribute("data-value"));
    setFormDialogOpen(true);
  };

  const onHandleSubmit = async (formData) => {
    try {
      await updateUser({
        [option]: formData.data,
        userId: id,
        option: option,
      });
    } catch (e) {
      setTitle(e.response.data);
      return;
    }
    setFormDialogOpen(false);
    await readuser(id);
  };

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
            <Button data-value="email" onClick={onHandleClick}>
              수정
            </Button>
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
            <Button data-value="password" onClick={onHandleClick}>
              수정
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <FormDialog
        open={formDialogOpen}
        onClose={() => {
          setTitle("ㅤ");
          setFormDialogOpen(false);
        }}
        onSubmit={onHandleSubmit}
        title={title}
        label={option}
      />
    </>
  );
};

export default UserInfo;
