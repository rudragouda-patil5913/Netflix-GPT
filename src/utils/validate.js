export const checkValidDataSignIn = (email, password) => {
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!isEmail) return "Invalid Email id!";
  if (!isPassword) return "Password Invalid!";
  return null;
};

export const checkValidDataSignUp = (name, email, password) => {
  const isName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!isName) return "Enter Valid name";
  if (!isEmail) return "Invalid Email id!";
  if (!isPassword) return "Password Invalid!";
  return null;
};
