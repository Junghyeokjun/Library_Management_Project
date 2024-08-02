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

const BookIntro = ({ book }) => {
  //소개글 버튼 태그입니다.

  const { bookIntro, authorIntro, tableOfContents } = book;

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

  const bookIntroRef = useRef(null);
  const authorIntroRef = useRef(null);
  const tableOfContentRef = useRef(null);

  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
        }}
      >
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <IntroBtn onClick={() => scrollIntro(bookIntroRef)}>책소개</IntroBtn>
          <IntroBtn onClick={() => scrollIntro(authorIntroRef)}>
            저자소개
          </IntroBtn>
          <IntroBtn onClick={() => scrollIntro(tableOfContentRef)}>
            목차
          </IntroBtn>
        </ButtonGroup>
      </Box>
      <Container>
        <SubTitle ref={bookIntroRef}>책 소개</SubTitle>
        <IntroContent>{bookIntro}</IntroContent>
        <SubTitle ref={authorIntroRef}>저자 소개</SubTitle>
        <IntroContent>{authorIntro}</IntroContent>
        <SubTitle ref={tableOfContentRef}>목차</SubTitle>
        <IntroContent>{tableOfContents}</IntroContent>
      </Container>
    </Box>
  );
};

export default BookIntro;
