const LoginScreen = () => {
  return (
    <>
      <h2>Login Screen</h2>

      <form>
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />

        <input type="submit" value="login" />

        <hr />

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
      </form>
    </>
  );
};

export default LoginScreen;
