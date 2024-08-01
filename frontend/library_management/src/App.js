import axios from "axios";
import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainPage from "./pages/MainPage";
import BookDetail from "./components/features/book/BookDetail";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SingUpPage";
import BookIntro from "./components/features/book/BookIntro";
import BookDetailPage from "./pages/BookDetailPage";
import UserInfo from "./components/features/User/UserInfo";
import MyPage from "./pages/MyPage";
import LoanList from "./components/features/User/LoanList";
import UserList from "./components/features/User/UserList";
import InsertBook from "./components/features/book/InsertBook";
import BookMenagement from "./components/features/book/BookManagement";
import { Box } from "@mui/material";
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
        {/* <MainPage /> */}
        {/* <BookDetailPage /> */}
        {/* <SignInPage /> */}
        {/* <SignUpPage /> */}
        {/* <BookMenagement /> */}
        <MyPage />
        {/* <LoanList /> */}
        {/* <UserList /> */}
        {/* <InsertBook /> */}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
