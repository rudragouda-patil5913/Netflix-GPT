import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { NFX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { addToggleGptSearchView } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const gptToggle = useSelector((store) => store.gptsearch.gptToggleSearch);

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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(addToggleGptSearchView());
  };
  return (
    <div className="flex flex-row justify-between w-screen px-8 py-2 bg-gradient-to-b from-black relative z-20 opacity-100">
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
            {gptToggle ? "Home" : "GPT Search"}
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
