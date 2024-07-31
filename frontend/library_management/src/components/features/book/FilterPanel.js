import React from "react";
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
} from "@mui/material";

// 카테고리 컴포넌트
const CategoryTabs = () => {
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

  return (
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
          value={0}
          variant="scrollable"
          scrollButtons={false} // 스크롤 버튼 숨기기
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
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: 2, mb: 1 }}>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>검색 유형</InputLabel>
          <Select defaultValue="title" label="검색 유형">
            <MenuItem value="title">제목</MenuItem>
            <MenuItem value="author">저자</MenuItem>
            <MenuItem value="publisher">출판사</MenuItem>
          </Select>
        </FormControl>
        <TextField label="검색" variant="outlined" fullWidth />
        <Button variant="contained">검색</Button>
      </Box>
    </Box>
  );
};

// 메인 필터 패널 컴포넌트
const FilterPanel = ({ children }) => {
  return (
    <Paper elevation={3}>
      <CategoryTabs />
      {children}
    </Paper>
  );
};

export default FilterPanel;
