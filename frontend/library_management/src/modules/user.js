import { handleActions } from "redux-actions";
import { deleteUser, getUser, getUserList } from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

//유저정보를 획득하는 액션입니다.
const GET_USER = "user/GET_USER";
const GET_USER_SUCCESS = "user/GET_USER_SUCCESS";
const GET_USER_FAILURE = "user/GET_USER_FAILURE";

//유저정보를 삭제하는 액션입니다.
const DELETE_USER = "user/DELETE_USER";
const DELETE_USER_SUCCESS = "user/DELETE_USER_SUCCESS";
const DELETE_USER_FAILURE = "user/DELETE_USER_FAILURE";

//유저정보 리스트를 획득하는 액션입니다.
const GET_USER_LIST = "user/GET_USER_LIST";
const GET_USER_LIST_SUCCESS = "user/GET_USER_LIST_SUCCESS";
const GET_USER_LIST_FAILURE = "user/GET_USER_LIST_FAILURE";

export const readUser = createRequestThunk(GET_USER, getUser);
export const removeUser = createRequestThunk(DELETE_USER, deleteUser);
export const readUsers = createRequestThunk(GET_USER_LIST, getUserList);

const initstate = {
  user: {},
  users: [],
  pageCount: 1,
};

const user = handleActions(
  {
    //유저정보 획득 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [GET_USER_SUCCESS]: (state, { payload }) => {
      const user = payload;
      return {
        ...state,
        user,
      };
    },
    [GET_USER_FAILURE]: (state, { payload }) => {
      console.log(GET_USER_FAILURE);
      console.log(payload);
      return state;
    }, //유저정보 삭제 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [DELETE_USER_SUCCESS]: (state, { payload }) => {
      console.log(payload);
      return state;
    },
    [DELETE_USER_FAILURE]: (state, { payload }) => {
      console.log(GET_USER_FAILURE);
      console.log(payload);
      return state;
    }, //유저정보 리스트 획득 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [GET_USER_LIST_SUCCESS]: (state, { payload }) => {
      const { userList, pageCount } = payload;
      return {
        ...state,
        users: userList,
        pageCount,
      };
    },
    [GET_USER_LIST_FAILURE]: (state, { payload }) => {
      console.log(GET_USER_FAILURE);
      console.log(payload);
      return state;
    },
  },
  initstate
);

export default user;
