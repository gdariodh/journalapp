import { useState } from "react";
// npm validator
import validator from "validator";
// redux
import { useDispatch } from "react-redux";
import { setError } from "../../redux/actions/uiAction";

const { Link } = require("react-router-dom");

const RegisterScreen = () => {
  const dispatch = useDispatch();

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

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("Form correcto");
    }

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
        <div className="auth__alert-error">hola</div>

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
