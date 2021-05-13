import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
// encapsula todos los reducers en un store, para hacerlos disponibles en toda la app
import {store} from "./redux/store";

const JournalApp = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};

export default JournalApp;
