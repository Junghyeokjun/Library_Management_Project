import axios from "axios";

const apiLink = "/api/";

//restful방식의 axios요청을 생성하는 메서드입니다.
const getApi = (url) => {
  return axios
    .get(url.toString())
    .then((response) => response)
    .catch((e) => {
      console.error(e);
      throw e;
    });
};
const postApi = (
  url,
  param,
  config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
) => {
  return axios
    .post(url.toString(), param, config)
    .then((response) => response)
    .catch((e) => {
      console.error(e);
      throw e;
    });
};
const putApi = (
  url,
  param,
  config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
) => {
  return axios
    .put(url.toString(), param, config)
    .then((response) => response)
    .catch((e) => {
      console.error(e);
      throw e;
    });
};
const deleteApi = (url) => {
  return axios
    .delete(url.toString())
    .then((response) => response)
    .catch((e) => {
      console.error(e);
      throw e;
    });
};
//도서정보에 관한 api입니다.

//도서정보 획득 메서드
export const getBook = (id) => {
  const url = new URL(apiLink + "book", window.location.origin);
  url.searchParams.append("id", id);

  return getApi(url);
};

//도서정보 추가 메서드
export const postBook = (book) => {
  const url = new URL(apiLink + "book", window.location.origin);
  return postApi(url, book, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//도서정보 수정 메서드
export const putBook = (book) => {
  const url = new URL(apiLink + "book", window.location.origin);

  return putApi(url, book, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//도서정보 삭제 메서드
export const deleteBook = (id) => {
  const url = new URL(apiLink + "book", window.location.origin);
  url.searchParams.append("id", id);

  return deleteApi(url);
};

//getBookList({category:,keyword:,option:,page: })
//도서정보리스트 획득 메서드
export const getBookList = ({
  category = 0,
  keyword = "",
  option = "title",
  page = 1,
}) => {
  const url = new URL(apiLink + "booklist", window.location.origin);
  url.searchParams.append("category", category);
  url.searchParams.append("keyword", keyword);
  url.searchParams.append("option", option);
  url.searchParams.append("page", page);

  return getApi(url);
};

//대출정보에 관한 api입니다.

//{userId, bookId}객체를 파라미터로 받습니다.
//대출정보 획득 메서드
export const getLoan = (loan) => {
  const { bookid, userid } = loan;
  const url = new URL(apiLink + "loan", window.location.origin);

  url.searchParams.append("bookid", bookid);
  url.searchParams.append("userid", userid);

  return getApi(url);
};

//{userId, bookId}객체를 파라미터로 받습니다.
//대출정보 추가 메서드
export const postLoan = (loan) => {
  const url = new URL(apiLink + "loan", window.location.origin);

  return postApi(url, loan);
};

//대출정보 수정 메서드(반납)
export const putLoan = (loan) => {
  const url = new URL(apiLink + "loan", window.location.origin);
  return putApi(url, loan);
};

//대출정보 리스트 획득 메서드
export const getLoanList = ({
  id = 0,
  page = 1,
  paging = 20,
  returned = false,
}) => {
  const url = new URL(apiLink + "loanlist", window.location.origin);
  url.searchParams.append("id", id);
  url.searchParams.append("page", page);
  url.searchParams.append("paging", paging);
  url.searchParams.append("returned", returned);

  return getApi(url);
};

//유저정보에 관한 api입니다.

//유저 정보 획득 메서드
export const getUser = (id) => {
  const url = new URL(apiLink + "user", window.location.origin);
  url.searchParams.append("id", id);

  return getApi(url);
};

//유저정보를 전송하고 해당 정보를 기반으로 데이터베이스에 유저정보를 추가하는 메서드입니다.
export const postUser = (user) => {
  const url = new URL(apiLink + "user", window.location.origin);

  return postApi(url, user);
};

export const putUser = (user) => {
  const url = new URL(apiLink + "user", window.location.origin);

  return putApi(url, user);
};

//유저 정보 삭제 메서드
export const deleteUser = (id) => {
  const url = new URL(apiLink + "user", window.location.origin);
  url.searchParams.append("id", id);

  return deleteApi(url);
};

//유저 정보 리스트 획득 메서드
export const getUserList = ({ page = 1, paging = 20 }) => {
  const url = new URL(apiLink + "userlist", window.location.origin);
  url.searchParams.append("page", page);
  url.searchParams.append("paging", paging);

  return getApi(url);
};
