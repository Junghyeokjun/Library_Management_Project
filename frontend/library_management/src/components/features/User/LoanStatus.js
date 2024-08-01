import { Typography } from "@mui/material";
import React from "react";

const LoanStatus = () => {
  return (
    <>
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
      {/* 추후에 대여한 책여부에 따라 나뉘도록 추가예정 */}
      {/* <Box
        sx={{
          border: "1px solid #eee",
          borderRadius: "10px",
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-evenly",
          pt: 1,
        }}
      >
        <Box
          sx={{
            width: "150px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <img
            src="https://mui.com/static/images/templates/dashboard.png"
            alt=""
            width="150px"
            height="235px"
          />
          <Typography
            variant="h5"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "150px",
            }}
          >
            sssssss
          </Typography>
        </Box>
        <Box
          sx={{
            width: "150px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <img
            src="https://mui.com/static/images/templates/dashboard.png"
            alt=""
            width="150px"
            height="235px"
          />
          <Typography
            variant="h5"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "150px",
            }}
          >
            ssssss
          </Typography>{" "}
        </Box>
        <Box
          sx={{
            width: "150px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <img
            src="https://mui.com/static/images/templates/dashboard.png"
            alt=""
            width="150px"
            height="235px"
          />
          <Typography
            variant="h5"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "150px",
            }}
          >
            sssssss
          </Typography>{" "}
        </Box>
        <Box
          sx={{
            width: "150px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <img
            src="https://mui.com/static/images/templates/dashboard.png"
            alt=""
            width="150px"
            height="235px"
          />
          <Typography
            variant="h5"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "150px",
            }}
          >
            sssssss
          </Typography>{" "}
        </Box>
      </Box> */}
    </>
  );
};

export default LoanStatus;
