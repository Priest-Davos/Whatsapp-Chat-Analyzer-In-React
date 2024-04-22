// Import necessary React and React Router components
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css"
//import components
// import LandingLoginRegister from "./pages/LandingLoginRegister";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingLoginRegister from "./pages/LandingLoginRegister";

// Logout component clears all stored tokens and navigates to login page
const Logout: React.FC = () => {
  localStorage.clear(); // Clear all local storage items
  return <Navigate to="/Login-register" />; // Redirect to login page
};

// RegisterAndLogout component clears storage and renders the Register component
const RegisterAndLogout: React.FC = () => {
  localStorage.clear(); // Clear all local storage items
  return <Register />; // Render Register page
};

// Main App component that defines the routing for the application
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/" // Main route that is protected
          element={
            <ProtectedRoute> {/* Only allow access if user is authenticated*/}
              <Home /> {/* Home component for authenticated users*/}
            </ProtectedRoute>
          }
        />
        <Route path ="/Login-register" element={<LandingLoginRegister/>} />
        <Route path="/login" element={<Login />} /> {/* Route for the login page */}
        <Route path="/logout" element={<Logout />} /> {/* Route for logging out */}
        <Route path="/register" element={<RegisterAndLogout />} /> {/* Route for registration and logout */}
        <Route path="*" element={<NotFound />}></Route> {/* Route for handling undefined paths */}
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;