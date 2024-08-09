import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readLoadStatus } from "@modules/loan";
import LoanStatus from "@components/features/loan/LoanStatus";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { logout, tokenUpdate } from "@modules/auth";

const LoanStatusContainer = ({
  loans,
  readLoadStatus,
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
    readLoadStatus({ id: id, paging: 4, returned: true });
  }, []);
  return <LoanStatus loans={loans} />;
};

export default connect(({ loan }) => ({ loans: loan.loanStatus }), {
  readLoadStatus,
  tokenUpdate,
  logout,
})(LoanStatusContainer);
