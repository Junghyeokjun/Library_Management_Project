import React from "react";
import { useLocation } from "react-router-dom";
import Error from "@components/common/Error";

const ErrorPage = () => {
  const location = useLocation();
  const { errorTitle, errorDetails } = location.state || {
    errorTitle: "404 Not Found",
    errorDetails: "해당 페이지를 찾을수가 없습니다.",
  };

  return <Error errorTitle={errorTitle} errorDetails={errorDetails} />;
};

export default ErrorPage;
