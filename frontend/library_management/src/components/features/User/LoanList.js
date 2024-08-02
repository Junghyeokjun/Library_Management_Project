import {
  Box,
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

const LoanList = ({ loans, pageCount, readLoans }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //검색기능 추가시

  const [keyword, setKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");
  const [option, setOption] = useState("title");

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    readLoans({ page: value });
  };

  return (
    <>
      <TableContainer sx={{ border: "1px solid #eee", borderRadius: "10px" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>회원번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>저자</TableCell>
              <TableCell>대여일</TableCell>
              <TableCell align="right">반납일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((loan) => (
              <TableRow key={loan.userId}>
                <TableCell>{loan.userId}</TableCell>
                <TableCell>{loan.title}</TableCell>
                <TableCell>{loan.author}</TableCell>
                <TableCell>{loan.loanDate}</TableCell>
                <TableCell align="right">{loan.returnDate}</TableCell>
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

export default LoanList;
