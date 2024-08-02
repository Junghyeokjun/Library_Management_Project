import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
  Container,
  Pagination,
} from "@mui/material";

// 카테고리 컴포넌트
const FilterPanel = ({ onReadBooks, pageCount, children }) => {
  const categories = [
    "전체",
    "총류",
    "철학",
    "종교",
    "사회과학",
    "자연과학",
    "기술과학",
    "예술",
    "언어",
    "문학",
    "역사",
  ];

  const [category, setCategory] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");
  const [option, setOption] = useState("title");
  const [currentPage, setCurrentPage] = useState(1);

  //페이지 전환시 이벤트
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    onReadBooks({
      category: category,
      keyword: keyword,
      option: option,
      page: value,
    });
  };
  //검색버튼 클릭시 이벤트
  const handleSearchClick = (event) => {
    onReadBooks({ category: category, keyword: inputKeyword, option: option });
    setKeyword(inputKeyword);
    setInputKeyword("");
    setCurrentPage(1);
  };
  //카테고리 전환시 이벤트
  const handleTabsChange = (event, value) => {
    setCategory(value);
    onReadBooks({ category: value, keyword: keyword, option: option });
    setCurrentPage(1);
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "white",
          zIndex: 1000,
          position: "sticky",
          top: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          pb: 0,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflow: "hidden",
            "@media (max-width: 899px)": {
              display: "none",
            },
          }}
        >
          <Tabs
            value={category}
            variant="scrollable"
            scrollButtons={false} // 스크롤 버튼 숨기기
            onChange={handleTabsChange}
            aria-label="category tabs"
            sx={{
              width: "100%",
              ".MuiTabs-scroller": {
                overflow: "hidden !important", // 스크롤 숨기기
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab label={category} key={index} />
            ))}
          </Tabs>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, ml: 2, mb: 1 }}
        >
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>검색 유형</InputLabel>
            <Select
              value={option}
              onChange={(event) => setOption(event.target.value)}
              label="검색 유형"
            >
              <MenuItem value="title">제목</MenuItem>
              <MenuItem value="author">저자</MenuItem>
              <MenuItem value="publisher">출판사</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="검색"
            variant="outlined"
            value={inputKeyword}
            onChange={(event) => setInputKeyword(event.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleSearchClick}>
            검색
          </Button>
        </Box>
      </Box>
      {children}
      <Container sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {/* 추후에 페이지수랑 연동 */}
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
      </Container>
    </>
  );
};

export default FilterPanel;
