import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
         navigate("/error");
      });
  };
  return (
    <div className="flex flex-row justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="w-2/12 flex flex-row justify-around">
          <h1 className="font-bold mt-2 bg-blue-300 h-6 w-10 text-center rounded-full">
            {user.email.toString().slice(0, 1).toUpperCase()}
          </h1>
          <button
            className="font-bold bg-slate-100 rounded-xl p-1 w-30 h-10"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
