import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/login" element={<LoginPage />} exact />
					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
						exact
					/>
          <Route path="/" element={<LoginPage/>} exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
