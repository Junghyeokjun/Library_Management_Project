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
  Typography,
} from "@mui/material";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanList = ({ loans, pageCount, readLoans, token, isAuthenticated }) => {
  const navigite = useNavigate();
  const role = token ? jwtDecode(token).role : false;
  if (!isAuthenticated && !(role[0]?.authority === "ROLE_ADMIN")) {
    navigite("/");
  }

  const [currentPage, setCurrentPage] = useState(1);

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
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                대출번호
              </TableCell>
              <TableCell>회원번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                저자
              </TableCell>
              <TableCell>대여일</TableCell>
              <TableCell align="right">반납일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((loan) => (
              <TableRow key={loan.loanId}>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                  {loan.loanId}
                </TableCell>
                <TableCell>{loan.userId}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {loan.title}
                  </Typography>
                </TableCell>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                  {loan.author}
                </TableCell>
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
