import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Paper,
  Pagination,
  Box,
  Button,
  Container,
} from "@mui/material";
import Book from "./Book";

function createData(id, title, author, publishedDate, imagePath, publisher) {
  return { id, title, author, publishedDate, imagePath, publisher };
}

const rows = [
  createData(22, 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    //추후 스타일객체 외부이동
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          mb: 2,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Book />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* 추후에 페이지수랑 연동 */}
        <Pagination count={10} shape="rounded" />
      </Container>
    </Container>
  );
}
