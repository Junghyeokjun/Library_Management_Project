import SignIn from "@components/features/auth/SignIn";
import { login } from "@modules/auth";
import React from "react";
import { connect } from "react-redux";

const SignInContainer = ({ isAuthenticated, login }) => {
  return <SignIn isAuthenticated={isAuthenticated} login={login} />;
};

export default connect(
  ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
  }),
  { login }
)(SignInContainer);
