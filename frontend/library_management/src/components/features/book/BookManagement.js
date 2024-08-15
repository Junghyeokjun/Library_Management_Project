import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Subtitle from "@components/common/SubTitle";
import ConfirmationDialog from "@components/common/ConfirmationDialog";
import AlertDialog from "@components/common/AlertDialog";
import { jwtDecode } from "jwt-decode";

const BookManagement = ({
  bookList,
  pageCount,
  readBooks,
  removeBook,
  token,
  isAuthenticated,
}) => {
  const navigite = useNavigate();
  const role = token ? jwtDecode(token).role : false;
  if (!isAuthenticated && !(role[0]?.authority === "ROLE_ADMIN")) {
    navigite("/");
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [option, setOption] = useState("title");
  const [inputKeyword, setInputKeyword] = useState("");
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [alertDialogOpen, setAlerteDialogOpen] = useState(false);
  const [choiceBookId, setChoiceBookId] = useState(0);
  const [alertMessage, setAlertMessage] = useState("error");

  //삭제 이벤트
  const handleOnCinfirm = async () => {
    try {
      await removeBook(choiceBookId); // removeBook 액션을 디스패치하고 완료될 때까지 기다림
      await readBooks({ page: currentPage }); // removeBook이 완료된 후에 readBooks 액션을 디스패치
    } catch (e) {
      setAlertMessage(e.response.data);
      setAlerteDialogOpen(true);
      setConfirmDialogOpen(false);
    }
    setConfirmDialogOpen(false);
  };

  //삭제버튼 클릭 이벤트
  const onHandleRemoveChange = async (id) => {
    setChoiceBookId(id);
    setConfirmDialogOpen(true);
  };

  //페이지 전환시 이벤트
  const onHandlePageChange = (event, value) => {
    setCurrentPage(value);
    readBooks({
      keyword: keyword,
      option: option,
      page: value,
    });
  };
  //검색버튼 클릭시 이벤트
  const handleSearchClick = (event) => {
    readBooks({ keyword: inputKeyword, option: option });
    setKeyword(inputKeyword);
    setInputKeyword("");
    setCurrentPage(1);
  };

  return (
    <>
      <Subtitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            pl: 1,
          }}
        >
          {"도서관리"}

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              mt: { xs: 2, sm: 0 },
            }}
          >
            <FormControl
              variant="outlined"
              sx={{ minWidth: 120, mr: { sm: 1, xs: 0 }, mb: { xs: 2, sm: 0 } }}
            >
              <InputLabel>검색 유형</InputLabel>
              <Select
                value={option}
                onChange={(event) => setOption(event.target.value)}
                label="검색 유형"
              >
                <MenuItem value="title">제목</MenuItem>
                <MenuItem value="author">저자</MenuItem>
                <MenuItem value="publisher">출판사</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="검색"
              variant="outlined"
              value={inputKeyword}
              onChange={(event) => setInputKeyword(event.target.value)}
              sx={{ mr: { sm: 1, xs: 0 }, mb: { xs: 2, sm: 0 } }}
            />
            <Button
              variant="contained"
              onClick={handleSearchClick}
              sx={{ minWidth: "93.5px" }}
            >
              검색
            </Button>
          </Box>
        </Box>
      </Subtitle>

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
                <TableCell sx={{ color: "black", textDecoration: "none" }}>
                  <Link
                    to={`/bookdetail/${book.bookId}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: "black ",
                      }}
                    >
                      {book.title}
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.publishedDate}</TableCell>
                <TableCell sx={{ width: { sm: "100px", xs: "auto" } }}>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      width: { sm: "100px", xs: "100%" },
                      height: "40px",
                      mb: { xs: 2, sm: 0 },
                    }}
                    component={Link}
                    to={`/bookmodify/${book.bookId}`}
                  >
                    수정
                  </Button>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ width: { sm: "100px", xs: "auto" } }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => onHandleRemoveChange(book.bookId)}
                    sx={{
                      width: { sm: "100px", xs: "64px" },
                      height: "40px",
                      mx: 2,
                      mb: { xs: 2, sm: 0 },
                    }}
                  >
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          my: 2,
        }}
      >
        <Box></Box>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={onHandlePageChange}
          shape="rounded"
          sx={{ mb: { xs: 2, sm: 0 } }}
        />
        <Box>
          <Button
            variant="contained"
            sx={{ mr: 4, width: { sm: "auto", xs: "100%" } }}
            component={Link}
            to={"/bookadd"}
          >
            도서 추가
          </Button>
        </Box>
      </Box>
      <ConfirmationDialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        onConfirm={handleOnCinfirm}
        message={"삭제하시겠습니까?"}
      />
      <AlertDialog
        open={alertDialogOpen}
        handleClose={() => setAlerteDialogOpen(false)}
        message={alertMessage}
      />
    </>
  );
};

export default BookManagement;
