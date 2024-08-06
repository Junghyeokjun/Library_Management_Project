import {
  Box,
  Button,
  Container,
  Pagination,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

const UserList = ({ users, pageCount, readUsers, removeUser }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //검색기능 추가시

  const [keyword, setKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");
  const [option, setOption] = useState("title");

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    readUsers({ page: value });
  };

  const handelRemoveClick = async (id) => {
    try {
      await removeUser(id);
      await readUsers({ page: currentPage });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TableContainer sx={{ border: "1px solid #eee", borderRadius: "10px" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>회원번호</TableCell>
              <TableCell sx={{ textAlign: "center" }}>이름</TableCell>
              <TableCell sx={{ textAlign: "center" }}>이메일</TableCell>
              <TableCell sx={{ textAlign: "center" }}>현재 대출권수</TableCell>
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
                <TableCell sx={{ textAlign: "center" }}>{user.email}</TableCell>
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
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
      </Box>
    </>
  );
};

export default UserList;
