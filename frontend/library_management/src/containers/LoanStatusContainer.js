import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readLoadStatus } from "../modules/loan";
import LoanStatus from "../components/features/User/LoanStatus";

const LoanStatusContainer = ({ loans, readLoadStatus }) => {
  useEffect(() => {
    readLoadStatus({ paging: 4 });
  }, []);
  return <LoanStatus loans={loans} />;
};

export default connect(({ loan }) => ({ loans: loan.loanStatus }), {
  readLoadStatus,
})(LoanStatusContainer);
