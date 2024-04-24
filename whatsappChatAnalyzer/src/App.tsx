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

// sub pages for Home 
import About from "./pages/About";
import Upload from "./pages/ChatUpload";
import UserProfile from "./pages/UserProfile";
import ChatDetails from "./pages/ChatDetails";
import Graphs from "./pages/Graphs";
import OverallResult from "./pages/OverallResult";
import HelpAndSupport from "./pages/HelpAndSupport";


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
      <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="home" // Main route that is protected
          element={
            <ProtectedRoute> {/* Only allow access if user is authenticated*/}
              <Home /> 
            </ProtectedRoute>
          }  
        >
          {/*Nested route for Home component */}
          <Route index element={<div>Home Main Content</div>} />
          <Route path="about" element={<About />} />
          <Route path="upload-chat" element={<Upload />} />
          <Route path="chat-details" element={<ChatDetails/>} />
          <Route path="graphs-patterns" element={<Graphs/>} />
          <Route path="overall-result" element={<OverallResult/>} />
          <Route path="help&support" element={<HelpAndSupport/>} />
        
        
          <Route path="user-profile" element={<UserProfile/>} />

          </Route>
       
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