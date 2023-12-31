import axios from "axios";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_REQUEST
} from "../constants";
//import { push } from "react-router-dom";
//import { push } from 'react-router-redux';
export const userLogin =
  (username, password, companyname) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_USER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://68.178.162.203:8080/AnalyticsProductDemo-v1.1/login",
        { username, password, companyname },
        config
      );

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          success: "success",
          data,
        },
      });

      console.log("data", data);
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAILURE, payload: error });
    }
  };

export const userLogout = (token) => async (dispatch) => {
	try {
		dispatch({ type: LOGOUT_USER_REQUEST });

    

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		await axios.post('http://68.178.162.203:8080/AnalyticsProductDemo-v1.1/signout', {token},config);

		dispatch({
			type: LOGOUT_USER_SUCCESS,
			payload: {
				success: "success",
			},
		});

    //dispatch(push('/'));
   
	} catch (error) {
		dispatch({ type: LOGOUT_USER_FAILURE, payload: error });
	}
};
