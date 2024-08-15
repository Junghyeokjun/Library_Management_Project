import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LoanStatus = ({ loans }) => {
  const isLoaned = loans.length === 0;

  return (
    <>
      {isLoaned ? (
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
            height: "267px",
            border: "1px solid #eee",
            borderRadius: "10px",
            lineHeight: "267px",
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // 글씨 크기 조정
          }}
        >
          대여한 책이 없습니다
        </Typography>
      ) : (
        <Box
          sx={{
            border: "1px solid #eee",
            borderRadius: "10px",
            flexGrow: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "space-evenly" },
            flexWrap: "wrap",
            pt: 1,
          }}
        >
          {loans.map((loan) => (
            <Box
              key={loan.loanId}
              sx={{
                width: { xs: "100px", sm: "130px", md: "150px" },
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                marginBottom: "15px", // Add some spacing between items
              }}
            >
              <Link
                to={`/bookdetail/${loan.bookId}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={loan.imagePath}
                  alt=""
                  width="100%"
                  height="auto"
                  style={{
                    maxHeight: "235px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%",
                    color: "black",
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    marginTop: "8px",
                  }}
                >
                  {loan.title}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default LoanStatus;
