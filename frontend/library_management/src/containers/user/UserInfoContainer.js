import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserInfo from "@components/features/user/UserInfo";
import { readUser } from "@modules/user";

const UserInfoContainer = ({ user, readUser }) => {
  useEffect(() => {
    readUser(1);
  }, []);
  return <UserInfo user={user} />;
};

export default connect(({ user }) => ({ user: user.user }), {
  readUser,
})(UserInfoContainer);
