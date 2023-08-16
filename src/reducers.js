import { LOGIN_USER_FAILURE,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS } from "./constants";

const initialState = {
	isUserLoggingIn: false,
	isLoggedIn: false,
	token: null,
	isUserLoggingOut: false,
	companyId: null,
};

export const getUserDetails = state => {
	return state.users;
};


export const userReducer = (state = initialState, { type, payload }) => {
	localStorage.setItem('token', payload?.data?.token);
  localStorage.setItem('companyId', payload?.data?.companyId);
	//console.log("token",payload?.data?.token)
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
		default:
			return state;
	}
	
};
