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
import { Link } from "react-router-dom";

const BookManagement = (book) => {
  const { bookList, pageCount, readBooks, removeBook } = book;
  const [currentPage, setCurrentPage] = useState(1);
  //추후에 검색기능 추가시
  const [keyword, setKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");

  const onHandleRemoveChange = (id) => {
    removeBook(id);
  };

  //페이지 전환시 이벤트
  const onHandlePageChange = (event, value) => {
    setCurrentPage(value);
    readBooks({
      page: value,
    });
  };

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
            {bookList.map((book) => (
              <TableRow key={book.bookId}>
                <TableCell>{book.bookId}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.publishedDate}</TableCell>
                <TableCell sx={{ width: "100px" }}>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ width: "100px", height: "40px" }}
                    component={Link}
                    to={`/bookmodify/${book.bookId}`}
                  >
                    수정
                  </Button>
                </TableCell>
                <TableCell align="right" sx={{ width: "100px" }}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => onHandleRemoveChange(book.bookId)}
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
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={onHandlePageChange}
          shape="rounded"
        />
        <Button
          variant="contained"
          sx={{ mr: 4 }}
          component={Link}
          to={"/bookadd"}
        >
          도서 추가
        </Button>
      </Box>
    </>
  );
};

export default BookManagement;
