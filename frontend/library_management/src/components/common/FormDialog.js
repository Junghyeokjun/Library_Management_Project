import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

const FormDialog = ({ open, onClose, onSubmit, title, label }) => {
  const [formData, setFormData] = useState({
    data: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ color: "red" }}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>아래의 정보를 입력해 주세요.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="data"
          label={label}
          type="text"
          fullWidth
          value={formData.data}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setFormData({
              data: "",
            });
            onClose();
          }}
          color="primary"
        >
          취소
        </Button>
        <Button onClick={handleSubmit} color="primary">
          제출
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
