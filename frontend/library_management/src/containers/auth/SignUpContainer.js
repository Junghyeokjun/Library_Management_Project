import SignUp from "@components/features/auth/SignUp";
import { addUser } from "@modules/user";
import React from "react";
import { connect } from "react-redux";

const SignUpContainer = ({ isAuthenticated, addUser }) => {
  return <SignUp isAuthenticated={isAuthenticated} signUp={addUser} />;
};

export default connect(
  ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
  }),
  { addUser }
)(SignUpContainer);
