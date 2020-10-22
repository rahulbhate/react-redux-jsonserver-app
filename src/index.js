import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate 
    loading={<div>Loading...</div>}
    persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);