import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Paper,
  Container,
} from "@mui/material";
import Book from "./Book";

const BookList = ({ bookList }) => {
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
            {bookList.map((book) => (
              <TableRow
                key={book.bookId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Book {...book} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BookList;
