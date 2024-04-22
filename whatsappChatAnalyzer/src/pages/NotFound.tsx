import React from "react";
import Background from "../components/Background";
import { Link } from "react-router-dom";

// Annotate the component as a React Functional Component
const NotFound: React.FC = () => {
  return (
    <Background>
    <div className=" flex justify-center items-center opacity-75  dark:bg-slate-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-md  justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-8">404 Not Found</h1>
        <p className="text-lg mb-4">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-lg mb-8">
          Please check the URL or{" "}
          <Link to="/" className="underline text-blue-300 hover:text-red-300">
            navigate back to the homepage
          </Link>
          .
        </p>
        {/* <Link to="/" className="text-lg text-white underline">
          Go to Homepage
        </Link> */}
      </div>
    </div>
    </Background>
  );
}

export default NotFound;

