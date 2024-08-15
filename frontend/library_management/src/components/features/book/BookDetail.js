import ConfirmationDialog from "@components/common/ConfirmationDialog";
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookDetail = ({
  userId,
  book,
  isAuthenticated,
  loan,
  readBook,
  readLoan,
  addLoan,
  modifyLoan,
}) => {
  const navigate = useNavigate();
  const {
    bookId,
    title,
    author,
    publishedDate,
    imagePath,
    publisher,
    availableCopies,
    totalCopies,
  } = book;

  const isDisabled = availableCopies === totalCopies;
  const details = [
    { label: "저자", value: author },
    { label: "출판사", value: publisher },
    { label: "출판일", value: publishedDate },
    {
      label: "대출현황",
      value: `${
        isDisabled ? "대출불가 " : "대출가능 "
      }(${availableCopies}/${totalCopies})`,
    },
  ];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [message, setMessage] = useState("확인");

  const handleOnClick = async () => {
    if (isAuthenticated) {
      if (loan !== null && loan !== "") {
        setMessage("반납하시겠습니까?");
      } else {
        setMessage("대여하시겠습니까?");
      }
      setDialogOpen(true);
    } else {
      navigate("/login");
    }
  };
  const handleOnCinfirm = async () => {
    try {
      if (loan !== null && loan !== "") {
        //반납
        await modifyLoan({ loanId: loan.loanId, bookId: bookId });
      } else {
        //대출
        await addLoan({ userId: userId, bookId: bookId });
      }
      await readBook(bookId);
      await readLoan({ bookid: bookId, userid: userId });
    } catch (e) {
      console.log(e);
    }
    setDialogOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        padding: "16px", // 모바일 환경에서 여백 추가
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Container sx={{ py: 2 }}>
            <h1>상세정보</h1>
          </Container>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#eee",
          }}
        >
          <Container
            sx={{
              width: { xs: "100%", md: "75%" }, // 모바일에서는 전체 너비 사용
              py: 5,
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // 모바일에서는 세로 정렬
              alignItems: { xs: "center", md: "start" }, // 모바일에서 중앙 정렬
            }}
          >
            <img
              src={imagePath}
              alt="도서 이미지"
              style={{
                width: "255px",
                height: "370px",
                border: "1px solid #ccc",
                boxShadow: "2px 2px #ccc",
                marginBottom: "16px", // 모바일 환경에서 아래 여백 추가
              }}
            />
            <Box sx={{ flexGrow: 1, pl: { xs: 0, md: 2 } }}>
              <Typography
                variant="h5" // 반응형 폰트 크기 적용
                sx={{
                  borderBottom: "1px solid black",
                  lineHeight: 1,
                  marginTop: 5,
                  paddingBottom: 5,
                }}
              >
                {title}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TableContainer
                  sx={{
                    backgroundColor: "#eee",
                    width: { xs: "100%", md: "70%" }, // 모바일에서는 전체 너비 사용
                  }}
                >
                  <Table>
                    <TableBody>
                      {details.map((detail, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              borderBottom: "none",
                              width: "100px",
                              p: 0,
                            }}
                          >
                            <Typography
                              sx={{ margin: "10px 0", fontSize: "1.2rem" }}
                            >
                              - {detail.label}
                            </Typography>
                          </TableCell>
                          <TableCell
                            sx={{
                              borderBottom: "none",
                              fontSize: "1.2rem",
                              p: 0,
                            }}
                          >
                            <Typography>{detail.value}</Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                  mt: 5,
                }}
              >
                <Button
                  variant="contained"
                  sx={{ width: "100px", height: "40px" }}
                  disabled={loan !== null && loan !== "" ? false : isDisabled}
                  onClick={() => handleOnClick()}
                >
                  {loan ? "반납" : "대출"}
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <ConfirmationDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleOnCinfirm}
        message={message}
      />
    </Box>
  );
};

export default BookDetail;
