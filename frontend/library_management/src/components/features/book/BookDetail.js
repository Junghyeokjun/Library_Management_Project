// 255 370
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
import React from "react";

const BookDetail = () => {
  const details = [
    { label: "저자", value: "아무개" },
    { label: "출판사", value: "제작" },
    { label: "출판일", value: "오늘" },
    { label: "대출현황", value: "대출불가 (5/5)" },
  ];
  return (
    <Box
      sx={{
        width: "100vw",
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
              width: "75%",
              py: 5,
              display: "flex",
              alignItems: "start",
            }}
          >
            <img
              src="https://mui.com/static/images/templates/dashboard.png"
              alt="도서 이미지"
              style={{
                width: "255px",
                height: "370px",
                border: "1px solid #ccc",
                boxShadow: "2px 2px #ccc",
              }}
            />
            <Box sx={{ flexGrow: 1, pl: 2 }}>
              <p
                style={{
                  borderBottom: "1px solid black",
                  fontSize: "2rem",
                  lineHeight: 1,
                  marginTop: 5,
                  paddingBottom: 5,
                }}
              >
                TITLE
              </p>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TableContainer sx={{ backgroundColor: "#eee", width: "70%" }}>
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
                >
                  대출
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default BookDetail;
