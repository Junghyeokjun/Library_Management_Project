// 기존 경로와 다른부분이 있고 토큰 관리, 성공실패관리가 집중적으로 이루어져야 하므로
// axios를 사용하지만 api.js와 분리하였습니다.

import axios from "axios";
import { jwtDecode } from "jwt-decode";

const authLink = "http://localhost:8282/auth/";

//데이터베이스에 일치하는 유저정보를 보낼경우 인증을 해주는 메서드입니다.(로그인)
export const postAuth = (credentials) => {
  return axios
    .post(authLink + "login", credentials)
    .then((response) => response)
    .catch((e) => {
      console.error(e);
      throw e;
    });
};

//refreshToken이 유효할경우 accessToken을 업데이트하는 메서드입니다.
export const putAuth = () => {
  const token = localStorage.getItem("token");

  //토큰이 null일경우 로그인 되지 않았다는 상태이므로 에러발생
  if (token === null) {
    return Promise.reject(new Error("토큰이 없습니다."));
  }

  if (checkTokenValidity(token)) {
    return new Promise((resolve) => resolve({ data: { token } }));
  }

  const refreshToken = localStorage.getItem("refreshToken");

  return axios
    .put(authLink + "refresh", { refreshToken: refreshToken })
    .then((response) => response)
    .catch((e) => {
      console.log(e);
      throw e;
    });
};

//로그아웃시 토큰을 localStorage에서 제거하는 메서드입니다.
export const deleteAuth = () => {
  return new Promise((resolve) => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    resolve({ data: {} });
  });
};

//해당함수는 auth내부에서 쓰이는 토큰 유효성 확인 함수입니다.
const checkTokenValidity = (token) => {
  // JWT 토큰의 만료 여부를 확인하는 로직
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decodedToken.exp > currentTime;
};
