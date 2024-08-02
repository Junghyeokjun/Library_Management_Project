import { handleActions } from "redux-actions";
import { getUser } from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

//유저정보를 획득하는 액션입니다.
const GET_USER = "user/GET_USER";
const GET_USER_SUCCESS = "user/GET_USER_SUCCESS";
const GET_USER_FAILURE = "user/GET_USER_FAILURE";

export const readUser = createRequestThunk(GET_USER, getUser);

const initstate = {
  user: {},
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
    },
  },
  initstate
);

export default user;
