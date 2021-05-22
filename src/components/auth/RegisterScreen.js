import { useState } from "react";

const { Link } = require("react-router-dom");

const RegisterScreen = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword)
      return alert("Los password son diferentes, intente de nuevo");

    console.log(data);

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
