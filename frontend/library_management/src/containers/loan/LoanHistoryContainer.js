import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readLoans } from "@modules/loan";
import LoanHistory from "@components/features/loan/LoanHistory";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { logout, tokenUpdate } from "@modules/auth";

const LoanHistoryContainer = ({
  loans,
  pageCount,
  readLoans,
  tokenUpdate,
  logout,
}) => {
  const navigate = useNavigate();

  let id;

  const fetch = async () => {
    try {
      id = jwtDecode(localStorage.getItem("token")).id;
    } catch (e) {
      try {
        await tokenUpdate();
      } catch (error) {
        console.log(error);
        await logout();
        navigate("/login");
        return;
      }
    }
  };
  fetch();
  useEffect(() => {
    readLoans({ id: id, paging: 20, returned: false });
  }, []);
  return (
    <LoanHistory loans={loans} pageCount={pageCount} readLoans={readLoans} />
  );
};

export default connect(
  ({ loan }) => ({ loans: loan.loanList, pageCount: loan.pageCount }),
  {
    readLoans,
    tokenUpdate,
    logout,
  }
)(LoanHistoryContainer);
