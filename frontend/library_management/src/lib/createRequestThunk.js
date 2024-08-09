const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params, navigate) => async (dispatch) => {
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
      if (navigate && e.response) {
        if (e.response.status === 404) {
          navigate("/error", {
            state: {
              errorTitle: "404 Not Found",
              errorDetails: "The resource you requested could not be found.",
            },
          });
        } else if (e.response.status === 500) {
          navigate("/error", {
            state: {
              errorTitle: "500 Internal Server Error",
              errorDetails: "An unexpected error occurred on the server.",
            },
          });
        } else if (e.response.status === 400) {
          navigate("/error", {
            state: {
              errorTitle: "400 Bad Request",
              errorDetails:
                "The request could not be understood by the server.",
            },
          });
        } else {
          throw e;
        }
      }
    }
  };
};

export default createRequestThunk;
