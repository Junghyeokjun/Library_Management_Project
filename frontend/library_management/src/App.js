import axios from "axios";
import { useState } from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import BookDetail from "./components/BookDetail";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SingUpPage";
function App() {
  const [api, setApi] = useState("");

  const onClick = () => {
    axios.get("http://localhost:8080/api/test/1").then((response) => {
      console.log(response.data);
      setApi(response.data);
    });
  };

  return (
    <>
      <Header />
      {/* <MainPage /> */}
      <BookDetail></BookDetail>
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}
    </>
  );
}

export default App;
