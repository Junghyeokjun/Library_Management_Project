import axios from "axios";
import { useState } from "react";

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
      <button onClick={onClick}>테스트</button>
      <div>{api}</div>
    </>
  );
}

export default App;
