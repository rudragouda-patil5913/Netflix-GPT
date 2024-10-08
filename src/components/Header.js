import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { NFX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { addToggleGptSearchView } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/configSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import usePathHook from "../hooks/usePathHook";
import { Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptToggle = useSelector((store) => store.gptsearch.gptToggleSearch);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  usePathHook("/browse");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(addToggleGptSearchView());
  };

  return (
    <div className="flex flex-col bg-black w-screen md:flex-row justify-between px-8 py-2 bg-gradient-to-b from-black absolute z-20 opacity-100">
      <img className="w-44" src={NFX_LOGO} alt="logo" />
      {user && (
        <div className=" md:w-4/12 flex justify-between flex-row md:justify-around">
          {gptToggle && (
            <select
              name="languages"
              id="lang"
              className="m-4 p-2 bg-slate-300 font-bold w-30 h-10 rounded-xl"
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.name}>
                  {lang.identifier}
                </option>
              ))}
            </select>
          )}
          <Link to="/browse">
            <button
              className="p-0 md:p-2 bg-slate-300 m-1 md:m-4 font-semibold md:font-bold rounded-xl w-40 h-10"
              onClick={handleGptSearchClick}>
              {gptToggle ? "Home" : "Search"}
            </button>
          </Link>
          <h1 className="font-semibold md:font-bold m-1 md:m-4 p-2 bg-blue-300 h-10 w-16 text-center rounded-full">
            {user.email.toString().slice(0, 1).toUpperCase()}
          </h1>
          <button
            className="m-1 md:m-4 font-semibold md:font-bold bg-slate-300 rounded-xl p-0 md:p-2 w-40 h-10"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
