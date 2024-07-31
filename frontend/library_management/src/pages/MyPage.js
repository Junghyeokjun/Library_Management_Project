import { Container } from "@mui/material";
import React from "react";
import UserInfo from "../components/features/User/UserInfo";
import LoanStatus from "../components/features/User/LoanStatus";
import LoanHistory from "../components/features/User/LoanHistory";
import SubTitle from "../components/common/SubTitle";

const MyPage = () => {
  return (
    <Container maxWidth="md">
      <SubTitle>회원정보</SubTitle>
      <UserInfo user={{ name: "aaa", email: "ssss" }} />
      <SubTitle>대출 현황</SubTitle>
      <LoanStatus />
      <SubTitle>대출 내역</SubTitle>
      <LoanHistory />
    </Container>
  );
};

export default MyPage;
