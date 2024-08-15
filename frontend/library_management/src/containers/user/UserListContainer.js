import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readUsers, removeUser } from "@modules/user";
import UserList from "@components/features/user/UserList";

const UserListContainer = ({
  users,
  pageCount,
  readUsers,
  removeUser,
  token,
  isAuthenticated,
}) => {
  console.log(pageCount);
  useEffect(() => {
    readUsers({});
  }, []);
  return (
    <UserList
      users={users}
      pageCount={pageCount}
      readUsers={readUsers}
      removeUser={removeUser}
      token={token}
      isAuthenticated={isAuthenticated}
    />
  );
};

export default connect(
  ({ user, auth }) => ({
    users: user.users,
    pageCount: user.pageCount,
    token: auth.token,
    isAuthenticated: auth.isAuthenticated,
  }),
  {
    readUsers,
    removeUser,
  }
)(UserListContainer);
