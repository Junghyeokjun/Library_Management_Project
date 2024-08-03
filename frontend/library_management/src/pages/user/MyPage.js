import { Container } from "@mui/material";
import React from "react";
import SubTitle from "@components/common/SubTitle";
import UserInfoContainer from "@containers/user/UserInfoContainer";
import LoanStatusContainer from "@containers/loan/LoanStatusContainer";
import LoanHistoryContainer from "@containers/loan/LoanHistoryContainer";

const MyPage = () => {
  return (
    <Container maxWidth="md">
      <SubTitle>회원정보</SubTitle>
      <UserInfoContainer />
      <SubTitle>대출 현황</SubTitle>
      <LoanStatusContainer />
      <SubTitle>대출 내역</SubTitle>
      <LoanHistoryContainer />
    </Container>
  );
};

export default MyPage;
