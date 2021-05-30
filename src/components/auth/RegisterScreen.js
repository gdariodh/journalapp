import { useState } from "react";
// npm validator
import validator from "validator";
// redux
import { useDispatch, useSelector } from "react-redux";
// actions redux
import { setError, removeError } from "../../redux/actions/uiAction";
import { registerWithEmailPassword } from "../../redux/actions/authAction";

import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const dispatch = useDispatch(); // invocar action redux

  // accede state con useSelector
  const { msgError } = useSelector((state) => state.ui);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const { name, email, password, repassword } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // validaciones manuales con libreria de npm validator
  const isFormValid = () => {
    if (name.trim().length === 0) {
      //  console.log('Name is required');
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      //  console.log('Email isnt valid');
      dispatch(setError("Email isnt valid"));

      return false;
    } else if (
      password !== repassword ||
      password.length < 5 ||
      repassword.length < 5
    ) {
      //  console.log('Password should be at least 6 characters and match each other');
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }

    dispatch(removeError());

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // si es false no ejecutes lo siguiente
    if (!isFormValid()) return;

    // a partir de aca isFormValid es true y todo corecto :)

    // alert("form correcto");

    // mandamos al action el objeto user
    dispatch(registerWithEmailPassword(data))

    setData({
      name: "",
      email: "",
      password: "",
      repassword: "",
    });
  };

  return (
    <>
      <h2 className="auth__title">Register Screen</h2>

      <form onSubmit={handleSubmit}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          onChange={handleChange}
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="name"
          name="name"
          value={name}
        />

        <input
          onChange={handleChange}
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="email"
          name="email"
          value={email}
        />
        <input
          onChange={handleChange}
          autoComplete="off"
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
          value={password}
        />

        <input
          onChange={handleChange}
          autoComplete="off"
          className="auth__input"
          type="password"
          placeholder="confirm password"
          name="repassword"
          value={repassword}
        />

        <input
          className="btn btn-primary btn-block mb-5"
          type="submit"
          value="login"
        />

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
