import { deleteAuth, postAuth, putAuth } from "@lib/auth";
import createRequestThunk from "@lib/createRequestThunk";

const { handleActions } = require("redux-actions");

//인증을 진행하는 액션입니다.
const POST_AUTH = "auth/POST_AUTH";
const POST_AUTH_SUCCESS = "auth/POST_AUTH_SUCCESS";
const POST_AUTH_FAILURE = "auth/POST_AUTH_FAILURE";

//Token 만료시 재인증을 하는 액션입니다.
const PUT_AUTH = "auth/PUT_AUTH";
const PUT_AUTH_SUCCESS = "auth/PUT_AUTH_SUCCESS";
const PUT_AUTH_FAILURE = "auth/PUT_AUTH_FAILURE";

//로그아웃을 진행하는 액션입니다.
const DELETE_AUTH = "auth/DELETE_AUTH";
const DELETE_AUTH_SUCCESS = "auth/DELETE_AUTH_SUCCESS";
const DELETE_AUTH_FAILURE = "auth/DELETE_AUTH_FAILURE";

export const login = createRequestThunk(POST_AUTH, postAuth);
export const tokenUpdate = createRequestThunk(PUT_AUTH, putAuth);
export const logout = createRequestThunk(DELETE_AUTH, deleteAuth);

//권한과 id는 토큰을 통해 localstorage에서 관리하므로 initstate는 빈객체로 생성하였습니다.

const initstate = {
  isAuthenticated: false,
  token: null,
};

const auth = handleActions(
  {
    [POST_AUTH_SUCCESS]: (state, { payload }) => {
      const { token, refreshToken } = payload;

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);

      return { ...state, isAuthenticated: true, token: token };
    },
    [POST_AUTH_FAILURE]: (state, { payload }) => {
      console.log(POST_AUTH_FAILURE);
      console.log(payload);
      return state;
    },
    [PUT_AUTH_SUCCESS]: (state, { payload }) => {
      const { token } = payload;

      localStorage.setItem("token", token);

      return { ...state, isAuthenticated: true, token: token };
    },
    [PUT_AUTH_FAILURE]: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");

      //본래는 주석을 활성화해야하나 리렌더링 될때마다 실행되도록 했으므로 대량의 로그가 발생해 비활성화 합니다.
      console.log(PUT_AUTH_FAILURE);
      if (payload.message !== "토큰이 없습니다.") console.log(payload.message);

      return { ...state, isAuthenticated: false, token: null };
    },
    [DELETE_AUTH_SUCCESS]: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");

      return { ...state, isAuthenticated: false, token: null };
    },
    [DELETE_AUTH_FAILURE]: (state, { payload }) => {
      console.log(DELETE_AUTH_FAILURE);
      console.log(payload);
      return state;
    },
  },
  initstate
);

export default auth;
