import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readLoans } from "@modules/loan";
import LoanHistory from "@components/features/loan/LoanHistory";
import { jwtDecode } from "jwt-decode";

const LoanHistoryContainer = ({ loans, pageCount, readLoans }) => {
  const id = jwtDecode(localStorage.getItem("token")).id;

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
  }
)(LoanHistoryContainer);
