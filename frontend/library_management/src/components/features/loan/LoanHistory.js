import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Pagination, TableContainer } from "@mui/material";
import { useState } from "react";

const LoanHistory = ({ loans, pageCount, readLoans }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    readLoans({ page: value, returned: false });
  };

  return (
    <>
      <TableContainer sx={{ border: "1px solid #eee", borderRadius: "10px" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>제목</TableCell>
              <TableCell>저자</TableCell>
              <TableCell>대여일</TableCell>
              <TableCell align="right">반납일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((loan) => (
              <TableRow key={loan.loanId}>
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

export default LoanHistory;
