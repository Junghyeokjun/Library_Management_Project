import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserInfo from "@components/features/user/UserInfo";
import { modifyUser, readUser } from "@modules/user";
import { jwtDecode } from "jwt-decode";
import { logout, tokenUpdate } from "@modules/auth";
import { useNavigate } from "react-router-dom";

const UserInfoContainer = ({
  user,
  readUser,
  modifyUser,
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
    readUser(id);
  }, []);
  return (
    <UserInfo user={user} readuser={readUser} updateUser={modifyUser} id={id} />
  );
};

export default connect(({ user }) => ({ user: user.user }), {
  readUser,
  modifyUser,
  tokenUpdate,
  logout,
})(UserInfoContainer);
