import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readLoans } from "../modules/loan";
import LoanStatus from "../components/features/User/LoanStatus";
import LoanHistory from "../components/features/User/LoanHistory";

const LoanHistoryContainer = ({ loans, pageCount, readLoans }) => {
  useEffect(() => {
    readLoans({ paging: 20, returned: true });
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
