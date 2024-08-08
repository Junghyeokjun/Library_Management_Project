import { Box, css, Typography } from "@mui/material";
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
            justifyContent: "space-evenly",
            pt: 1,
          }}
        >
          {loans.map((loan) => (
            <Box
              key={loan.loanId}
              sx={{
                width: "150px",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Link
                to={`/bookdetail/${loan.bookId}`}
                style={{ textDecoration: "none" }}
              >
                <img src={loan.imagePath} alt="" width="150px" height="235px" />
                <Typography
                  variant="h5"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "150px",
                    color: "black",
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
