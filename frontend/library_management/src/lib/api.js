import axios from "axios";

const apiLink = "http://localhost:8282/api/";

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

export const getBook = (id) => {
  const url = new URL(apiLink + "book");
  url.searchParams.append("id", id);

  return getApi(url);
};
export const postBook = (book) => {
  const url = new URL(apiLink + "book");
  return postApi(url, book, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const putBook = (book) => {
  const url = new URL(apiLink + "book");

  return putApi(url, book, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteBook = (id) => {
  const url = new URL(apiLink + "book");
  url.searchParams.append("id", id);

  return deleteApi(url);
};

//getBookList({category:,keyword:,option:,page: })
export const getBookList = ({
  category = 0,
  keyword = "",
  option = "title",
  page = 1,
}) => {
  const url = new URL(apiLink + "booklist");
  url.searchParams.append("category", category);
  url.searchParams.append("keyword", keyword);
  url.searchParams.append("option", option);
  url.searchParams.append("page", page);

  return getApi(url);
};

//대출정보에 관한 api입니다.

//{userId, bookId}객체를 파라미터로 받습니다.
export const postLoan = (loan) => {
  const url = new URL(apiLink + "loan");

  return postApi(url, loan);
};

export const putLoan = (id = 0) => {
  const url = new URL(apiLink + "loan");
  return putApi(url, id);
};

export const getLoanList = ({
  id = 0,
  page = 1,
  paging = 20,
  returned = false,
}) => {
  const url = new URL(apiLink + "loanlist");
  url.searchParams.append("id", id);
  url.searchParams.append("page", page);
  url.searchParams.append("paging", paging);
  url.searchParams.append("returned", returned);

  return getApi(url);
};
//유저정보에 관한 api입니다.

export const getUser = (id) => {
  const url = new URL(apiLink + "user");
  url.searchParams.append("id", id);

  return getApi(url);
};

export const deleteUser = (id) => {
  const url = new URL(apiLink + "user");
  url.searchParams.append("id", id);

  return deleteApi(url);
};

export const getUserList = ({ page = 1, paging = 20 }) => {
  const url = new URL(apiLink + "userlist");
  url.searchParams.append("page", page);
  url.searchParams.append("paging", paging);

  return getApi(url);
};
