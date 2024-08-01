import { handleActions } from "redux-actions";
import {
  deleteBook,
  getBook,
  getBookList,
  postBook,
  putBook,
} from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

//도서정보를 획득하는 액션입니다.
const GET_BOOK = "book/GET_BOOK";
const GET_BOOK_SUCCESS = "book/GET_BOOK_SUCCESS";
const GET_BOOK_FAILURE = "book/GET_BOOK_FAILURE";

//도서정보를 추가하는 액션입니다.
const ADD_BOOK = "book/ADD_BOOK";
const ADD_BOOK_SUCCESS = "book/ADD_BOOK_SUCCESS";
const ADD_BOOK_FAILURE = "book/ADD_BOOK_FAILURE";

//도서정보를 수정하는 액션입니다.
const MODIFY_BOOK = "book/MODIFY_BOOK";
const MODIFY_BOOK_SUCCESS = "book/MODIFY_BOOK_SUCCESS";
const MODIFY_BOOK_FAILURE = "book/MODIFY_BOOK_FAILURE";

//도서정보를 삭제하는 액션입니다.
const REMOVE_BOOK = "book/REMOVE_BOOK";
const REMOVE_BOOK_SUCCESS = "book/REMOVE_BOOK_SUCCESS";
const REMOVE_BOOK_FAILURE = "book/REMOVE_BOOK_FAILURE";

//도서정보 리스트를 얻어오는 액션입니다.
const GET_BOOK_LIST = "book/GET_BOOK_LIST";
const GET_BOOK_LIST_SUCCESS = "book/GET_BOOK_LIST_SUCCESS";
const GET_BOOK_LIST_FAILURE = "book/GET_BOOK_LIST_FAILURE";

//도서정보 획득 메서드입니다.
export const readBook = createRequestThunk(GET_BOOK, getBook);
//도서정보 추가 메서드입니다.
export const addBook = createRequestThunk(ADD_BOOK, postBook);
//도서정보 수정 메서드입니다.
export const modifyBook = createRequestThunk(MODIFY_BOOK, putBook);
//도서정보 삭제 메서드입니다.
export const removeBook = createRequestThunk(REMOVE_BOOK, deleteBook);

//도서정보 리스트 획득 메서드입니다.
export const readBooks = createRequestThunk(GET_BOOK_LIST, getBookList);

const initstate = {
  book: {},
  bookList: [],
};

const book = handleActions(
  {
    //도서정보 획득 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [GET_BOOK_SUCCESS]: (state, { payload }) => {
      const book = payload;
      return {
        ...state,
        book,
      };
    },
    [GET_BOOK_FAILURE]: (state, { payload }) => {
      console.log(GET_BOOK_FAILURE);
      console.log(payload);
      return state;
    },

    //도서정보 추가 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [ADD_BOOK_SUCCESS]: (state, { payload }) => {
      console.log(payload);
      return state;
    },
    [ADD_BOOK_FAILURE]: (state, { payload }) => {
      console.log(ADD_BOOK_FAILURE);
      console.log(payload);
      return state;
    },

    //도서정보 수정 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [MODIFY_BOOK_SUCCESS]: (state, { payload }) => {
      console.log(payload);
      return state;
    },
    [MODIFY_BOOK_FAILURE]: (state, { payload }) => {
      console.log(MODIFY_BOOK_FAILURE);
      console.log(payload);
      return state;
    },

    //도서정보 삭제 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [REMOVE_BOOK_SUCCESS]: (state, { payload }) => {
      console.log(payload);
      return state;
    },
    [REMOVE_BOOK_FAILURE]: (state, { payload }) => {
      console.log(REMOVE_BOOK_FAILURE);
      console.log(payload);
      return state;
    },

    //도서정보 리스트 획득 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [GET_BOOK_LIST_SUCCESS]: (state, { payload }) => {
      const { bookList, pageCount } = payload;
      return {
        ...state,
        bookList,
      };
    },
    [GET_BOOK_LIST_FAILURE]: (state, { payload }) => {
      console.log(GET_BOOK_LIST_FAILURE);
      console.log(payload);
      return state;
    },
  },
  initstate
);

export default book;
