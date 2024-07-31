import {
  Box,
  Button,
  ButtonGroup,
  Container,
  styled,
  Typography,
} from "@mui/material";
import SubTitle from "../../common/SubTitle";
import React, { useRef } from "react";

const BookIntro = () => {
  //소개글 버튼 태그입니다.
  const IntroBtn = styled(Button)(() => ({
    width: "200px",
  }));

  //소개글 내용 태그입니다.
  const IntroContent = styled(Typography)(() => ({
    wordBreak: "break-all",
    fontSize: "16px",
    lineHeight: "1.2rem",
  }));
  //소개글 이동 메서드입니다.
  const scrollIntro = (target) =>
    target.current.scrollIntoView({ behavior: "smooth" });

  const bookIntro = useRef(null);
  const authorIntro = useRef(null);
  const tableOfContent = useRef(null);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
        }}
      >
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <IntroBtn onClick={() => scrollIntro(bookIntro)}>책소개</IntroBtn>
          <IntroBtn onClick={() => scrollIntro(authorIntro)}>저자소개</IntroBtn>
          <IntroBtn onClick={() => scrollIntro(tableOfContent)}>목차</IntroBtn>
        </ButtonGroup>
      </Box>
      <Container>
        <SubTitle ref={bookIntro}>책 소개</SubTitle>
        <IntroContent>내용</IntroContent>
        <SubTitle ref={authorIntro}>저자 소개</SubTitle>
        <IntroContent>내용</IntroContent>
        <SubTitle ref={tableOfContent}>목차</SubTitle>
        <IntroContent>내용</IntroContent>
      </Container>
    </Box>
  );
};

export default BookIntro;
