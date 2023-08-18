import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/details";
import { Link,useNavigate} from "react-router-dom";
import { userLogout } from "../actions/actions";
//import { getUserDetails } from "../reducers/reducers";

const Dashboard = () => {
  // const [token,setToken]=useState('');
  // const [companyId,setCompanyId]=useState('');

  const navigate = useNavigate();

  const [apiValue, setApiValue] = useState("cumulativePrimary");

  const token = localStorage.getItem("token");
  const companyId = localStorage.getItem("companyId");

  //const user = useSelector(getUserDetails);

  //console.log("t", token);

  const handleDropdownChange = (e) => {
    setApiValue(e.target.value);
  };

  const dispatch = useDispatch();

  const message = useSelector((state) => {
    return state.details.message;
  });

  // useEffect(() => {
  //   const storedtoken=localStorage.getItem('token');
  //   console.log("t",storedtoken)
  //   const  storedcompanyId=localStorage.getItem('companyId');
  //   dispatch(getDetails(apiValue,storedtoken,storedcompanyId));
  // },[dispatch,apiValue]);

  useEffect(() => {
    dispatch(getDetails(apiValue, token, companyId));
  });

  //console.log("message", message);

  // if (user?.isLoggedIn && user?.token) {
  //   return navigate('/dashboard');
  // }


  const logout = (token) => {
    dispatch(userLogout(token));

  navigate('/');
    // if (user?.isUserLoggingOut === true) {
    //   return <Navigate to="/" />;
    // }
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to="/dashboard" className="flex items-center">
            <img src="./logo.png" className="h-8 mr-3" alt="Dataweaver Logo" />
          </Link>

          <select
            className="block p-2 border border-gray-500 text-lg font-bold rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={apiValue}
            onChange={handleDropdownChange}
          >
            <option value="cumulativePrimary">Cumulative Primary</option>
            <option value="line_total_Analysis_Dashboard">
              Line Total Analysis Dashboard
            </option>
            <option value="Beat_ID_Analysis_Dashboard">
              Beat ID Analysis Dashboard
            </option>
            <option value="amount_total_Across_Months">
              MoM Amount Dashboard
            </option>
          </select>

          <button
            type="button"
            onClick={() => logout(token)}
            className="text-gray-900 bg-white border font-extrabold text-lg border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="embedded-website-container">
        <iframe
          src={message}
          title="Embedded Website"
          width="100%"
          height="800px"
          frameBorder="0"
        >
          Your browser does not support iframes.
        </iframe>
      </div>
    </div>
  );
};

export default Dashboard;
