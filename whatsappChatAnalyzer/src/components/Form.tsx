import { useState } from "react"; // Import the useState hook from React
import api from "../api"; // Import the API abstraction for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"; // Import token constants
import "../styles/Form.css"; // Import styles specific to forms
import LoadingIndicator from "./LoadingIndicator"; // Import the loading indicator component
import "../styles/LoadingIndicator.css"

import Button from '@mui/material/Button';

// Define the props expected by the Form component
interface FormProps {
  route: string; // Route for making API requests
  method: "login" | "register"; // Method for the form (login or register)
}

// Define the Form component
function Form({ route, method }: FormProps) {
    // Define state variables and functions to update them
    const [username, setUsername] = useState<string>(""); // State to store the username input
    const [email, setEmail] = useState<string>(""); // State to store the email input
    const [password, setPassword] = useState<string>(""); // State to store the password input
    const [loading, setLoading] = useState<boolean>(false); // State to handle the display of the loading indicator
    const navigate = useNavigate(); // Hook to navigate to different pages

    // Determine the title of the form based on the method
    const formTitle = method === "login" ? "Login" : "Register";

    // Define the function to handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true); // Set loading to true to display the loading indicator
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            // If the method is register, make a POST request to register a new user
            if (method === "register") {
                await api.post(route, { username, email, password });
                navigate("/login"); // Redirect to the login page after successful registration
            } 
            // If the method is login, make a POST request to log in the user
            else if (method === "login") {
                const response = await api.post(route, { username, password });
                // Store access and refresh tokens in local storage
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate("/"); // Redirect to the home page after successful login
            }
        } catch (error) {
            // If there's an error, show an alert with the error message
            if (error instanceof Error) {
                alert(error.message);
            }
        } finally {
            setLoading(false); // Set loading to false after the request is complete
            setPassword("")
            setUsername("")
        }
    };

    // Render the form
    return (
       
        <form onSubmit={handleSubmit} className="flex justify-center items-center opacity-75  dark:bg-slate-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-md form-container justify-center">
            <div className="  top-0 left-0    right-0 left-0 bottom-0 ">
                <div className="text-center text-3xl font-bold mb-3  ">
                    <h1 className="text-white">{formTitle}</h1>
                </div>
                <input
                    className=" form-input  mb-4"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    
                />
                {method === 'register' && 
                <input
                    className="  form-input mb-4"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />}
                <input
                    className=" form-input  mb-4 "
                    type="password"
                    value={password}
                    
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

                {/* Show loading indicator while processing the form submission */}  
                {loading && <LoadingIndicator />}

                {/* Submit button for the form */}
                <Button className=" form-button mt-4" type="submit" variant="contained" color="success">
                    {formTitle}
                </Button>
               
            </div>
        </form>
      
    );
}

export default Form;
