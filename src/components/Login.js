import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidDataSignIn, checkValidDataSignUp } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = () => {
    let message;
    if (name.current) {
      message = checkValidDataSignUp(
        name.current.value,
        email.current.value,
        password.current.value
      );
    } else {
      message = checkValidDataSignIn(
        email.current.value,
        password.current.value
      );
    }
    setErrorMessage(message);
    if (message) return;

    //Sign In / Sign Up Logic
    if (!isSignInForm) {
      // Logic for Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Logic for Sign In

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={BG_IMG} alt="bg-img" className="w-full h-full fixed object-cover mt-0" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-full md:w-4/12 my-32 mt-[5%] md:mt-[10%] md:mx-auto left-0 right-0 text-white rounded-lg bg-opacity-90">
        <h1 className="font-bold text-3xl m-2 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="px-2 py-4 my-2 w-full bg-transparent border border-slate-400 placeholder:text-slate-300 bg-opacity-60 rounded-lg"
          />
        )}
        {!isSignInForm && (
          <input
            type="tel"
            placeholder="Phone number"
            className="px-2 py-4 my-2 w-full bg-transparent border border-slate-400 placeholder:text-slate-300 bg-opacity-60 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or mobile number"
          className="px-2 py-4 my-2 w-full bg-transparent border border-slate-400 placeholder:text-slate-300 bg-opacity-60 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete=""
          className="px-2 py-4 my-2 w-full bg-transparent border border-slate-400 placeholder:text-slate-300 bg-opacity-60 rounded-lg"
        />
        {errorMessage && (
          <h1 className="text-red-600 text-lg font-semibold">{errorMessage}</h1>
        )}
        <button
          className="p-2 my-6 bg-red-500 w-full rounded-lg"
          onClick={handleSubmit}>
          {isSignInForm ? "Sign In" : " Sign Up"}
        </button>

        <div
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
        </div>
      </form>
    </div>
  );
};

export default Login;
