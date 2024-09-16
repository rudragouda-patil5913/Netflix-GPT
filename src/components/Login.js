import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt="bg-img"
          className="bg-gradient-to-b from-black"
        />
      </div>
      <form className="absolute p-12 bg-black w-4/12 my-32 m-auto left-0 right-0 text-white rounded-lg bg-opacity-90">
        <h1 className="font-bold text-3xl m-2 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-2 py-4 my-2 w-full bg-transparent border border-slate-400 placeholder:text-slate-300 bg-opacity-60 rounded-lg"
          />
        )}
        {!isSignInForm && (
          <input
            type="number"
            placeholder="Phone number"
            className="px-2 py-4 my-2 w-full bg-transparent border border-slate-400 placeholder:text-slate-300 bg-opacity-60 rounded-lg"
          />
        )}
        <input
          type="email"
          placeholder="Email or mobile number"
          className="px-2 py-4 my-2 w-full bg-transparent border border-slate-400 placeholder:text-slate-300 bg-opacity-60 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-4 my-2 w-full bg-transparent border border-slate-400 placeholder:text-slate-300 bg-opacity-60 rounded-lg"
        />
        <button className="p-2 my-6 bg-red-500 w-full rounded-lg">
          {isSignInForm ? "Sign In" :" Sign Up"}
        </button>
        <p
          onClick={() => {
            setIsSignInForm(!isSignInForm);
          }}>
          {isSignInForm ? (
            <h1>
              New to Netflix?{" "}
              <span className="font-semibold">Sign up now.</span>
            </h1>
          ) : (
            <h1>
              Already registered?{" "}
              <span className="font-semibold">Sign In now.</span>
            </h1>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
