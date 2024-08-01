import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Paper,
  Pagination,
  Container,
} from "@mui/material";
import Book from "./Book";

//샘플데이터 추후에 파라미터 받는 형식으로 변경

function createData(
  id,
  title,
  author,
  publishedDate,
  imagePath,
  publisher,
  availableCopies,
  totalCopies
) {
  return {
    id,
    title,
    author,
    publishedDate,
    imagePath,
    publisher,
    availableCopies,
    totalCopies,
  };
}

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    setBookList([
      createData(22, 159, 6.0, 24, 4.0),
      createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      createData("Eclair", 262, 16.0, 24, 6.0),
      createData("Cupcake", 305, 3.7, 67, 4.3),
      createData("Gingerbread", 356, 16.0, 49, 3.9),
    ]);
  }, []);
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
                key={book.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Book {...book} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {/* 추후에 페이지수랑 연동 */}
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
      </Container>
    </Container>
  );
};

export default BookList;
