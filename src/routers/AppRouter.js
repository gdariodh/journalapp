import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AuthRouter from "./AuthRouter";
//   children route
// components

const AppRouter = () => {
    return ( 
        <Router>
            <Switch>
                <Route to="/auth" component={AuthRouter}/>
            </Switch>
        </Router>
     );
}
 
export default AppRouter;