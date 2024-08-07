import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readLoadStatus } from "@modules/loan";
import LoanStatus from "@components/features/loan/LoanStatus";
import { jwtDecode } from "jwt-decode";

const LoanStatusContainer = ({ loans, readLoadStatus }) => {
  const id = jwtDecode(localStorage.getItem("token")).id;

  useEffect(() => {
    readLoadStatus({ id: id, paging: 4, returned: true });
  }, []);
  return <LoanStatus loans={loans} />;
};

export default connect(({ loan }) => ({ loans: loan.loanStatus }), {
  readLoadStatus,
})(LoanStatusContainer);
