const { Link } = require("react-router-dom");

const RegisterScreen = () => {
  return (
    <>
      <h2 className="auth__title">Register Screen</h2>

      <form>
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="name"
          name="name"
        />

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

        <input
          autoComplete="off"
          className="auth__input"
          type="password"
          placeholder="confirm password"
          name="password"
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
