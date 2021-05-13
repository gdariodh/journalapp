import { Link } from "react-router-dom";
import { useState } from "react";
// dispatch -> invocar un action
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";
// actions

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email && !data.password) {
      return alert("ingrese los datos");
    }

    // pasa objeto user al Login Action
    dispatch(login(123, "gaby"));

    // reset
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h2 className="auth__title">Login Screen</h2>

      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <input
          autoComplete="off"
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <input
          className="btn btn-primary btn-block"
          type="submit"
          value="login"
        />

        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
