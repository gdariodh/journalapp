import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
//   children route
import AuthRouter from "./AuthRouter";
// components
import JournalScreen from "../components/journal/JournalScreen";

const AppRouter = () => {
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
