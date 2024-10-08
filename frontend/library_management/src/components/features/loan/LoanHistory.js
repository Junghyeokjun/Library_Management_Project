import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Pagination, TableContainer, Typography } from "@mui/material";
import { useState } from "react";

const LoanHistory = ({ loans, pageCount, readLoans }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isLoaned = loans.length === 0;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    readLoans({ page: value, returned: false });
  };

  return (
    <>
      {isLoaned ? (
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
            height: "267px",
            border: "1px solid #eee",
            borderRadius: "10px",
            lineHeight: "267px",
            textAlign: "center",
            mb: 2,
          }}
        >
          대여한 책이 없습니다
        </Typography>
      ) : (
        <>
          <TableContainer
            sx={{
              border: "1px solid #eee",
              borderRadius: "10px",
              overflowX: "auto",
            }}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>제목</TableCell>
                  <TableCell>저자</TableCell>
                  <TableCell sx={{ whiteSpace: "nowrap" }}>대여일</TableCell>
                  <TableCell sx={{ whiteSpace: "nowrap" }} align="right">
                    반납일
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loans.map((loan) => (
                  <TableRow key={loan.loanId}>
                    <TableCell>
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: { xs: "100px", sm: "200px" },
                        }}
                      >
                        {loan.title}
                      </Typography>
                    </TableCell>
                    <TableCell>{loan.author}</TableCell>
                    <TableCell sx={{ whiteSpace: "nowrap" }}>
                      {loan.loanDate}
                    </TableCell>
                    <TableCell sx={{ whiteSpace: "nowrap" }} align="right">
                      {loan.returnDate}
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
      )}
    </>
  );
};

export default LoanHistory;
