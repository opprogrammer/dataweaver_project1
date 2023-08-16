import './App.css';
import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';


function App() {
  
  return (
    <>
    <Router>
				<Routes>
					<Route path="/" element={
          <LoginPage />} exact />
          <Route path="/login" element={<LoginPage />} exact />
					<Route
						path="/dashboard"
						element={
								<Dashboard />
						}
						exact
					/>
          </Routes>
          </Router>
    </>
  );
}

export default App;
