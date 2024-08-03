import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readUsers, removeUser } from "@modules/user";
import UserList from "@components/features/user/UserList";

const UserListContainer = ({ users, pageCount, readUsers, removeUser }) => {
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
    />
  );
};

export default connect(
  ({ user }) => ({ users: user.users, pageCount: user.pageCount }),
  {
    readUsers,
    removeUser,
  }
)(UserListContainer);
