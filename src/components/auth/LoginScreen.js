const { Link } = require("react-router-dom")

const LoginScreen = () => {
  return (
    <>
      <h2 className="auth__title">Login Screen</h2>

      <form>
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="email"
          name="email"
        />
        <input
          autoComplete="off"
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
        />

        <input  className="btn btn-primary btn-block" type="submit" value="login" />

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

        <Link className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
