import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
} from "../constants";

const initialState = {
  isUserLoggingIn: false,
  isLoggedIn: false,
  token: null,
  isUserLoggingOut: false,
  companyId: null,
};

export const getUserDetails = (state) => {
  return state.users;
};

export const userReducer = (state = initialState, { type, payload }) => {
  // 	localStorage.setItem('token', payload?.data?.token);
  //   localStorage.setItem('companyId', payload?.data?.companyId);
  // console.log("token",payload?.data?.token)
  switch (type) {
    case LOGIN_USER_REQUEST:
      return { ...state, isUserLoggingIn: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isUserLoggingIn: false,
        token: payload?.data?.token,
        companyId: payload?.data?.companyId,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isUserLoggingIn: false,
      };
    	case LOGOUT_USER_REQUEST:
    	return { ...state, isUserLoggingOut: true,isLoggedIn: false, };
    case LOGOUT_USER_SUCCESS:
      return { ...state, token: null,companyId:null, };
    // case CLEAR_USER_DETAILS:
    // 	return {
    // 		...state,
    // 		token:null,
    // 		companyId:null,
    // 		isLoggedIn: false,
    // 		isUserLoggingOut: false,
    // 	};
    case LOGOUT_USER_FAILURE:
    	return {
    		...state,
    		isUserLoggingOut: false,
    	};
    default:
      return state;
  }
};
