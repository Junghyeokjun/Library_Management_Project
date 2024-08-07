import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "@components/layout/Footer";
import MainPage from "@pages/book/MainPage";
import SignInPage from "@pages/auth/SignInPage";
import SignUpPage from "@pages/auth/SingUpPage";
import BookDetailPage from "@pages/book/BookDetailPage";
import MyPage from "@pages/user/MyPage";
import { Box } from "@mui/material";
import BooKManagementPage from "@pages/book/BooKManagementPage";
import UserListPage from "@pages/user/UserListPage";
import LoanListPage from "@pages/loan/LoanListPage";
import BookAddPage from "@pages/book/BookAddPage";
import BookModifyPage from "@pages/book/BookModifyPage";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tokenUpdate } from "@modules/auth";
import HeaderContainer from "@containers/layout/HeaderContainer";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(tokenUpdate());
      } catch (e) {}
    };

    fetchData();
  });

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <HeaderContainer />
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/bookdetail/:id" element={<BookDetailPage />}></Route>
          <Route path="/login" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route
            path="/bookmanagement"
            element={<BooKManagementPage />}
          ></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/loanlist" element={<LoanListPage />}></Route>
          <Route path="/userlist" element={<UserListPage />}></Route>
          <Route path="/bookadd" element={<BookAddPage />}></Route>
          <Route path="/bookmodify/:id" element={<BookModifyPage />}></Route>
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
