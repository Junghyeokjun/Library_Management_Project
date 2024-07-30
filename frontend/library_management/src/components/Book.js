import React from "react";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";

const Book = () => {
  //추후에 파라미터를 받는 형식으로 수정
  return (
    <>
      <TableCell sx={{ width: "120px" }}>
        <img
          className="book-image"
          src="https://mui.com/static/images/templates/dashboard.png"
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 추후 제목에 링크 */}
          <h1>제목</h1>
          <div>
            <p>-저자:</p>
            <p>-출판연도:</p>
            <p>-출판사:</p>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ width: "180px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "end",
          }}
        >
          <div
            style={{ width: "90px", display: "flex", justifyContent: "end" }}
          >
            <p>대출</p>
          </div>
          {/* 원클릭 함수로 제작하여 제목과 함께 링크 */}
          <Button variant="contained">상세보기</Button>
        </div>
      </TableCell>
    </>
  );
};

export default Book;
