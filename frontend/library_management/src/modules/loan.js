import { handleActions } from "redux-actions";
import { getLoanList, postLoan, putLoan } from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

//대출정보를 입력하는 액션입니다.
const ADD_LOAN = "loan/ADD_LOAN";
const ADD_LOAN_SUCCESS = "loan/ADD_LOAN_SUCCESS";
const ADD_LOAN_FAILURE = "loan/ADD_LOAN_FAILURE";

//대출정보를 수정하는 액션입니다.
const MODIFY_LOAN = "loan/MODIFY_LOAN";
const MODIFY_LOAN_SUCCESS = "loan/MODIFY_LOAN_SUCCESS";
const MODIFY_LOAN_FAILURE = "loan/MODIFY_LOAN_FAILURE";

//대출정보 리스트를 획득하는 액션입니다.
const GET_LOAN_LIST = "loan/GET_LOAN_LIST";
const GET_LOAN_LIST_SUCCESS = "loan/GET_LOAN_LIST_SUCCESS";
const GET_LOAN_LIST_FAILURE = "loan/GET_LOAN_LIST_FAILURE";

//대출정보 추가메서드입니다.
export const addLoan = createRequestThunk(ADD_LOAN, postLoan);

//대출정보 수정 메서드입니다.
export const modifyLoan = createRequestThunk(MODIFY_LOAN, putLoan);

//대출정보 리스트 획득 메서드입니다.
export const readLoans = createRequestThunk(GET_LOAN_LIST, getLoanList);

const initstate = {
  loanList: [],
  pageCount: 1,
};

const loan = handleActions(
  {
    //대출정보 추가 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [ADD_LOAN_SUCCESS]: (state, { payload }) => {
      console.log(payload);
      return state;
    },
    [ADD_LOAN_FAILURE]: (state, { payload }) => {
      console.log(ADD_LOAN_FAILURE);
      console.log(payload);
      return state;
    },

    //도서정보 수정 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [MODIFY_LOAN_SUCCESS]: (state, { payload }) => {
      console.log(payload);
      return state;
    },
    [MODIFY_LOAN_FAILURE]: (state, { payload }) => {
      console.log(MODIFY_LOAN_FAILURE);
      console.log(payload);
      return state;
    },

    //도서정보 리스트 획득 메서드의 결과를 처리하는 리듀서 메서드입니다.
    [GET_LOAN_LIST_SUCCESS]: (state, { payload }) => {
      const { loanList, pageCount } = payload;
      return {
        ...state,
        loanList,
      };
    },
    [GET_LOAN_LIST_FAILURE]: (state, { payload }) => {
      console.log(GET_LOAN_LIST_FAILURE);
      console.log(payload);
      return state;
    },
  },
  initstate
);

export default loan;
