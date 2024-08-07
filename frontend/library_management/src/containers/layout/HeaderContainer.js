import React from "react";
import Header from "@components/layout/Header";
import { connect } from "react-redux";
import { logout } from "@modules/auth";

const HeaderContainer = ({ isAuthenticated, token, logout }) => {
  return (
    <Header isAuthenticated={isAuthenticated} token={token} logout={logout} />
  );
};

export default connect(
  ({ auth }) => ({ isAuthenticated: auth.isAuthenticated, token: auth.token }),
  { logout }
)(HeaderContainer);
