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
import { useEffect } from "react";
import { firebase } from "../firebase/firebaseConfig";
// redux
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // revisa si existe user, y lo loguea apenas cargue la app
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        // mandamos el user encontrado y lo logueamos
        // login(uid, displayName)
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, []);

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
