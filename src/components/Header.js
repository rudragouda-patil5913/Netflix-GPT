import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { NFX_LOGO } from "../utils/constant";
import { addToggleGptSearchView } from "../utils/gptSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(addToggleGptSearchView());
  };
  return (
    <div className="flex flex-row justify-between w-screen px-8 py-2 bg-gradient-to-b from-black relative z-20 opacity-100">
      <img className="w-44" src={NFX_LOGO} alt="logo" />
      {user && (
        <div className="w-3/12 flex flex-row justify-around">
          <button
            className="p-1 bg-slate-200 opacity-80 mr-4 text-slate-500 font-bold rounded-xl px-2 w-40 h-10"
            onClick={handleGptSearchClick}>
            GPT Search
          </button>
          <h1 className="font-bold m-2 bg-blue-300 h-6 w-10 text-center rounded-full">
            {user.email.toString().slice(0, 1).toUpperCase()}
          </h1>
          <button
            className="font-bold bg-slate-100 rounded-xl p-2 w-30 h-10"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
