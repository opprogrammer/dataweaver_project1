import {
  GET_DETAIL_FAILURE,
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
} from "../constants";

const initialState = { message: null };

export const detailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_REQUEST:
      return { ...state };
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        message: payload?.data?.message,
      };
    case GET_DETAIL_FAILURE:
      return { ...state };

    default:
      return state;
  }
};
