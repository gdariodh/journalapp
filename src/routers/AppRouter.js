import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//   children route
import AuthRouter from "./AuthRouter";
// components
import JournalScreen from "../components/journal/JournalScreen";
import { useEffect, useState } from "react";
import { firebase } from "../firebase/firebaseConfig";
// redux
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";

const AppRouter = () => {
  const dispatch = useDispatch();

  // hacer loading global de la app, pone en espera al user mientras comprueba si tiene un tokenAuth
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // revisa si existe user, y lo loguea apenas cargue la app
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        // mandamos el user encontrado y lo logueamos
        // login(uid, displayName)
        dispatch(login(user.uid, user.displayName));

        setChecking(false);
      }
    });
    // eslint-disable-next-line
  }, [checking]);

  // retorna una pantalla de carga - un component
  if (checking) {
    return <h1>Espere...</h1>;

    //  return (<LoadComponent/>)
  }

  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <Route exact path="/" component={JournalScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
