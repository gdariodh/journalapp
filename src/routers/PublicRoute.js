// para usuarios no autenticados
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

// ...rest para que escuche por las demas props, aparte de las definidas
const PublicRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <>
      {/* ...rest para props como exact for example */}
      <Route
        {...rest}
        component={(props) =>
          !isAuth ? <Component {...props} /> : <Redirect to="/auth/login" />
        }
      />
      {/* 
      si se cumple (isAuth -> true), retorna el componente protegido pasado por props
     */}
    </>
  );
};

// PropTypes -> best practice, para que marque error si falta un prop por pasar
PublicRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  // como es functional component, PropTypes is func
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
