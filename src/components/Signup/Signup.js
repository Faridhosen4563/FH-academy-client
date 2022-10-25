import React, { useContext } from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../images/google .svg";
import githubLogo from "../../images/github.svg";
import facbookLogo from "../../images/facebook.svg";
import { FaUser } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
  const googleProvider = new GoogleAuthProvider();
  const { providerLogIn } = useContext(AuthContext);

  const handleGoogleSign = () => {
    providerLogIn(googleProvider);
  };

  return (
    <div>
      <div class="h-screen  flex-col justify-center items-center">
        <div class="flex  mt-20 justify-center items-center bg-white">
          <form class="bg-white">
            <h1 class="text-gray-800 font-bold text-2xl mb-1 text-center">
              Please Sign Up!!!
            </h1>
            <p class="text-sm font-normal text-gray-600 mb-7 text-center">
              Register here
            </p>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <FaUser className="h-5 w-5 text-gray-400"></FaUser>
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name="name"
                id=""
                placeholder="Username"
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <HiPhotograph className="h-5 w-5 text-gray-400"></HiPhotograph>
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name="photoUrl"
                id=""
                placeholder="Photo URL"
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none"
                type="email"
                name="email"
                id=""
                placeholder="Email Address"
              />
            </div>
            <div class="flex items-center mb-2 border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none"
                type="password"
                name="confirm"
                id=""
                placeholder="Confirm Password"
              />
            </div>

            <button
              type="submit"
              class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Signup
            </button>
            <span>
              Already have an account?Please{" "}
              <Link className="text-blue-400" to="/login">
                Login
              </Link>{" "}
            </span>
          </form>
        </div>
        <div className="divider w-9/12 md:w-1/3 mx-auto">OR</div>
        <div className="w-9/12 md:w-1/5 mx-auto">
          <button
            onClick={handleGoogleSign}
            class="block w-full btn btn-outline btn-primary mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            <img src={googleLogo} className="w-6 h-6 inline mr-2" alt="" />
            <span>Signup with Google</span>
          </button>
          <button class="block w-full btn btn-outline btn-primary mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
            <img src={githubLogo} className="w-6 h-6 inline mr-2" alt="" />
            <span>Signup with GitHub</span>
          </button>
          <button class="block w-full btn btn-outline btn-primary mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
            <img src={facbookLogo} className="w-6 h-6 inline mr-2" alt="" />
            <span>Signup with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
