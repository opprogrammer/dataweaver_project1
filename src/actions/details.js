import axios from "axios";
import {
	GET_DETAIL_FAILURE,
	GET_DETAIL_REQUEST,
	GET_DETAIL_SUCCESS,
} from "../constants";

export const getDetails =
	(apiValue,token,companyId) =>
	async dispatch => {
		try {
			dispatch({ type: GET_DETAIL_REQUEST });

			const { data } = await axios.get(
				`http://68.178.162.203:8080/AnalyticsProductDemo-v1.1/${apiValue}?c_id=${companyId}`,
                {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                }
                
			);

			dispatch({
				type: GET_DETAIL_SUCCESS,
				payload: {
					success: "success",
					data,
				},
			});
		} catch (error) {
			dispatch({ type: GET_DETAIL_FAILURE, payload: error });
		}
	};
