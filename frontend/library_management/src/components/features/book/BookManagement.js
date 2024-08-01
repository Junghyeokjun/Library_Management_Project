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

  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);
  //추후에 검색기능 추가시
  const [keyword, setKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");

  return (
    <>
      <TableContainer sx={{ border: "1px solid #eee", borderRadius: "10px" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>도서번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>저자</TableCell>
              <TableCell>출판일</TableCell>
              <TableCell></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell sx={{ width: "100px" }}>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ width: "100px", height: "40px" }}
                  >
                    수정
                  </Button>
                </TableCell>
                <TableCell align="right" sx={{ width: "100px" }}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: "100px", height: "40px", mx: 2 }}
                  >
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <Box></Box>
        <Pagination count={pageCount} page={currentPage} shape="rounded" />
        <Button variant="contained" sx={{ mr: 4 }}>
          도서 추가
        </Button>
      </Box>
    </>
  );
};

export default LoanList;
