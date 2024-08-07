import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserInfo from "@components/features/user/UserInfo";
import { readUser } from "@modules/user";
import { jwtDecode } from "jwt-decode";

const UserInfoContainer = ({ user, readUser }) => {
  const id = jwtDecode(localStorage.getItem("token")).id;
  useEffect(() => {
    readUser(id);
  }, []);
  return <UserInfo user={user} />;
};

export default connect(({ user }) => ({ user: user.user }), {
  readUser,
})(UserInfoContainer);
