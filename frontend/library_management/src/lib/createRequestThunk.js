const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
      });
      throw e;
    }
  };
};

export default createRequestThunk;
