import React from "react";
import TableCell from "@mui/material/TableCell";
import { Box, Button, Typography } from "@mui/material";

const Book = ({
  id,
  title,
  author,
  publishedDate,
  imagePath,
  publisher,
  availableCopies,
  totalCopies,
}) => {
  //추후에 파라미터를 받는 형식으로 수정
  return (
    <>
      <TableCell sx={{ width: "120px" }}>
        <img
          className="book-image"
          src={imagePath}
          alt="도서 이미지"
          style={{
            width: "118px",
            height: "168px",
            border: "1px solid #ccc",
            boxShadow: "2px 2px #ccc",
          }}
        />
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          {/* 추후 제목에 링크 */}
          <Typography
            sx={{ fontWeight: "bold", fontSize: "2rem", mb: "1.2rem" }}
          >
            {title}
          </Typography>
          <Box>
            <Typography>-저자:{author}</Typography>
            <Typography>-출판연도:{publishedDate}</Typography>
            <Typography>-출판사:{publisher}</Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell sx={{ width: "180px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Box sx={{ width: "90px", display: "flex", justifyContent: "end" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {availableCopies}/{totalCopies} 대출
            </Typography>
          </Box>
          {/* 원클릭 함수로 제작하여 제목과 함께 링크 */}
          <Button variant="contained">상세보기</Button>
        </Box>
      </TableCell>
    </>
  );
};

export default Book;
