import {
  Box,
  Button,
  Container,
  Pagination,
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

  const handelRemoveClick = (id) => {
    removeUser(id);
  };
  return (
    <>
      <TableContainer sx={{ border: "1px solid #eee", borderRadius: "10px" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>회원번호</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>현재 대출권수</TableCell>
              <TableCell>가입 일자</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.userId}>
                <TableCell sx={{ Height: "53px" }}>{user.userId}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.loanCount}</TableCell>
                <TableCell>{user.updatedAt}</TableCell>
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
