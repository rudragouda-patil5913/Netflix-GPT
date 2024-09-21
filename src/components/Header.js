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
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(addToggleGptSearchView());
  };

  return (
    <div className="flex flex-row justify-between w-screen px-8 py-2 bg-gradient-to-b from-black absolute z-20 opacity-100">
      <img className="w-44" src={NFX_LOGO} alt="logo" />
      {user && (
        <div className="w-4/12 flex flex-row justify-around">
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
          <button
            className="p-2 bg-slate-300 m-4 font-bold rounded-xl w-40 h-10"
            onClick={handleGptSearchClick}>
            {gptToggle ? "Home" : "Search Movies"}
          </button>
          <h1 className="font-bold m-4 p-2 bg-blue-300 h-10 w-16 text-center rounded-full">
            {user.email.toString().slice(0, 1).toUpperCase()}
          </h1>
          <button
            className="m-4 font-bold bg-slate-300 rounded-xl p-2 w-40 h-10"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
