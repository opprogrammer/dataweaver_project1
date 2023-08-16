import axios from "axios";
import {  LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE } from "./constants";


export const userLogin = (username,password,companyname) => async dispatch => {
	try {
		dispatch({ type: LOGIN_USER_REQUEST });

		console.log("requested")

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		console.log("config console log")

		const { data } = await axios.post('http://68.178.162.203:8080/AnalyticsProductDemo-v1.1/login', {username,password,companyname}, config);
		

		dispatch({
			type: LOGIN_USER_SUCCESS,
			payload: {
				success: "success",
				data,
			},
		});

		console.log("data",data)
	} catch (error) {
		dispatch({ type: LOGIN_USER_FAILURE, payload: error });
	}
};

// export const userLogout = () => async (dispatch, getState) => {
// 	try {
// 		dispatch({ type: LOGOUT_USER_REQUEST });

// 		const token = getState().userDetails?.token;

// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${token}`,
// 			},
// 		};

// 		await axios.post(`${base_url}/signout`, { token }, config);

// 		dispatch({
// 			type: LOGOUT_USER_SUCCESS,
// 			payload: {
// 				success: "success",
// 			},
// 		});
// 	} catch (error) {
// 		dispatch({ type: LOGOUT_USER_FAILURE, payload: error });
// 	}
// };

