import axios from "axios";
import { useState } from "react";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import MainPage from "@pages/book/MainPage";
import SignInPage from "@pages/user/SignInPage";
import SignUpPage from "@pages/user/SingUpPage";
import BookDetailPage from "@pages/book/BookDetailPage";
import MyPage from "@pages/user/MyPage";
import BookMenagement from "@components/features/book/BookManagement";
import { Box } from "@mui/material";
import BooKManagementPage from "@pages/book/BooKManagementPage";
import UserListPage from "@pages/user/UserListPage";
import LoanListPage from "@pages/loan/LoanListPage";
import BookAddPage from "@pages/book/BookAddPage";
import BookModifyPage from "@pages/book/BookModifyPage";
import { Route, Routes } from "react-router-dom";
function App() {
  const [api, setApi] = useState("");

  const onClick = () => {
    axios.get("http://localhost:8080/api/test/1").then((response) => {
      console.log(response.data);
      setApi(response.data);
    });
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
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
