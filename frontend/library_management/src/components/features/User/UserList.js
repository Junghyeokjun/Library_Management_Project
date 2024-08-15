import AlertDialog from "@components/common/AlertDialog";
import ConfirmationDialog from "@components/common/ConfirmationDialog";
import {
  Box,
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({
  users,
  pageCount,
  readUsers,
  removeUser,
  token,
  isAuthenticated,
}) => {
  const navigite = useNavigate();
  const role = token ? jwtDecode(token).role : false;
  if (!isAuthenticated && !(role[0]?.authority === "ROLE_ADMIN")) {
    navigite("/");
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [choiceUserId, setChoiceUserId] = useState(0);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [alertDialogOpen, setAlerteDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("error");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    readUsers({ page: value });
  };

  const handelRemoveClick = async (id) => {
    setChoiceUserId(id);
    setConfirmDialogOpen(true);
  };

  const onHandleRemoveChange = async () => {
    try {
      await removeUser(choiceUserId);
      await readUsers({ page: currentPage });
    } catch (e) {
      setAlertMessage(e.response.data);
      setAlerteDialogOpen(true);
      setConfirmDialogOpen(false);
    }
    setConfirmDialogOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <Box sx={{ p: 2 }}>
          {users.map((user) => (
            <Box
              key={user.userId}
              sx={{
                border: "1px solid #eee",
                borderRadius: "10px",
                mb: 2,
                p: 2,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                회원번호: {user.userId}
              </Typography>
              <Typography>이름: {user.userName}</Typography>
              <Typography>이메일: {user.email}</Typography>
              <Typography>현재 대출권수: {user.loanCount}권</Typography>
              <Typography>
                가입 일자: {user.updatedAt.substring(0, 10)}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handelRemoveClick(user.userId)}
                  sx={{ width: "80px", height: "35px" }}
                >
                  탈퇴
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <TableContainer sx={{ border: "1px solid #eee", borderRadius: "10px" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>회원번호</TableCell>
                <TableCell sx={{ textAlign: "center" }}>이름</TableCell>
                <TableCell sx={{ textAlign: "center" }}>이메일</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  현재 대출권수
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>가입 일자</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.userId}>
                  <TableCell sx={{ Height: "53px", textAlign: "center" }}>
                    {user.userId}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {user.userName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {user.email}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {user.loanCount}권
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {user.updatedAt.substring(0, 10)}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handelRemoveClick(user.userId)}
                      sx={{ width: "100px", height: "40px", mx: 2 }}
                    >
                      탈퇴
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
      </Box>
      <ConfirmationDialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        onConfirm={onHandleRemoveChange}
        message={"삭제하시겠습니까?"}
      />
      <AlertDialog
        open={alertDialogOpen}
        handleClose={() => setAlerteDialogOpen(false)}
        message={alertMessage}
      />
    </>
  );
};

export default UserList;
