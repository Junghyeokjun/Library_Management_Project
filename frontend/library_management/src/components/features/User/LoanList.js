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

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const LoanList = () => {
  const rows = [
    createData(
      0,
      "16 Mar, 2019",
      "Elvis Presley",
      "Tupelo, MS",
      "VISA ⠀•••• 3719",
      312.44
    ),
    createData(
      1,
      "16 Mar, 2019",
      "Paul McCartney",
      "London, UK",
      "VISA ⠀•••• 2574",
      866.99
    ),
    createData(
      2,
      "16 Mar, 2019",
      "Tom Scholz",
      "Boston, MA",
      "MC ⠀•••• 1253",
      100.81
    ),
    createData(
      3,
      "16 Mar, 2019",
      "Michael Jackson",
      "Gary, IN",
      "AMEX ⠀•••• 2000",
      654.39
    ),
    createData(
      4,
      "15 Mar, 2019",
      "Bruce Springsteen",
      "Long Branch, NJ",
      "VISA ⠀•••• 5919",
      212.79
    ),
  ];

  const [loanList, setLoanList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);
  //검색기능 추가시

  const [keyword, setKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");
  const [option, setOption] = useState("title");

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{`$${row.amount}`}</TableCell>
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
