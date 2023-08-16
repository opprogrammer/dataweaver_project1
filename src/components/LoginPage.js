import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../actions";
import { getUserDetails } from "../reducers";
import { Navigate } from "react-router-dom";



const LoginPage = () => {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [companyname, setCompanyname] = useState("");

    const onChangeUsername = (e) => {
       const username = e.target.value;
        setUsername(username);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };
    
      const onChangeCompanyname = (e) => {
        const companyname = e.target.value;
        setCompanyname(companyname);
      };
    
      
    const dispatch = useDispatch();

	const user = useSelector(getUserDetails);

	const handleSubmit = () => {
		dispatch(userLogin(username,password,companyname));
        //<Navigate to="/dashboard" />
	};
	
	if (user?.isLoggedIn && user?.token) {
		return <Navigate to="/dashboard" />;
	}

  

  return (
    <div>
        <div className='flex justify-center mt-9'>
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" value={username} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required onChange={onChangeUsername}/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" value={password} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required  onChange={onChangePassword}/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your company</label>
            <input  name="companyname" id="companyname" value={companyname} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="company" required onChange={onChangeCompanyname}/>
        </div>
        <button type="submit" onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
    </form>
</div>
</div>
    </div>
  )
}

export default LoginPage


