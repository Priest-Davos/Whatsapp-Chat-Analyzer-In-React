import React from "react";
import { useNavigate } from "react-router-dom";
// import { useGoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from "react-icons/md";

import Background from "../components/Background";

const LandingLoginRegister: React.FC = () => {
  const navigate = useNavigate();

  // This function will handle the Google login response
  // const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  //   if ('accessToken' in response) {
  //     // Assuming your API needs a token, you'd include your API call logic here.
  //   }
  // };

  // Configuration for useGoogleLogin hook
  // const Googlelogin = useGoogleLogin({
  //   onSuccess: (response) => responseGoogle(response as GoogleLoginResponse),
  //   onError: (response) => console.error(response),
  // });

  return (
    <Background>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <p></p>
        </div>

        <div className="shadow-2xl">
          <button
            type="button"
            className="mb-7 w-full  bg-primary flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none focus:outline-none hover:bg-blue-500 focus:bg-blue-500 text-black font-bold py-2 px-4 rounded"
            onClick={() =>navigate('/login')}
          ><MdEmail className="mr-4" /> Log in 
          </button>
          <button
            type="button"
            className=" w-full mb-7 bg-primary flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none focus:outline-none hover:bg-blue-500 focus:bg-blue-500 text-black font-bold py-2 px-4 rounded"
            onClick={() => navigate('/register')}
          > 👤  Register
          </button>
          <button
            type="button"
            className="bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none focus:outline-none hover:bg-blue-500 focus:bg-blue-500 text-black font-bold py-2 px-4 rounded"
            // onClick={() => Googlelogin()}
          >
            <FcGoogle className="mr-4 " /> Sign in with google
          </button>
        </div>
      </div>
    </Background>
  );
};

export default LandingLoginRegister;
