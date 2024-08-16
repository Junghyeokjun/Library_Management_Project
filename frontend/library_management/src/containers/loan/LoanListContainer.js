import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readUsers, removeUser } from "@modules/user";
import LoanList from "@components/features/loan/LoanList";
import { readLoans } from "@modules/loan";

const LoanListContainer = ({
  loans,
  pageCount,
  readLoans,
  token,
  isAuthenticated,
}) => {
  useEffect(() => {
    readLoans({});
  }, []);
  return (
    <LoanList
      loans={loans}
      pageCount={pageCount}
      readLoans={readLoans}
      token={token}
      isAuthenticated={isAuthenticated}
    />
  );
};

export default connect(
  ({ loan, auth }) => ({
    loans: loan.loanList,
    pageCount: loan.pageCount,
    token: auth.token,
    isAuthenticated: auth.isAuthenticated,
  }),
  {
    readLoans,
  }
)(LoanListContainer);
