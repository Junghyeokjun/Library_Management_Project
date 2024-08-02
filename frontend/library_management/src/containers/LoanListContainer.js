import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readUsers, removeUser } from "../modules/user";
import LoanList from "../components/features/User/LoanList";
import { readLoans } from "../modules/loan";

const LoanListContainer = ({ loans, pageCount, readLoans }) => {
  useEffect(() => {
    readLoans({});
  }, []);
  return <LoanList loans={loans} pageCount={pageCount} readLoans={readLoans} />;
};

export default connect(
  ({ loan }) => ({ loans: loan.loanList, pageCount: loan.pageCount }),
  {
    readLoans,
  }
)(LoanListContainer);
