import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "axios";

import "./assets/sass/index.scss";

import routes from "./routes";
import { getToken } from "./helper/auth";

import NavigationBar from "./components/NavigationBar";
import AuthorizeModal from "./components/Miniatures/AuthorizationModal";
import { useStoreContext } from "./store";
import { setTokenAction } from "./store/actions";

let _token = getToken();

function App() {
  const [token, setToken] = useState();
  const { dispatch } = useStoreContext();

  const root = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) => <route.component {...props} />}
      />
    ) : null;
  });

  useEffect(() => {
    if (_token) {
      setToken(_token);
    }
  }, []);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${_token}`;
    dispatch(setTokenAction(_token));
    // eslint-disable-next-line
  }, [token]);

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        {token ? <Switch>{root}</Switch> : <AuthorizeModal />}
      </Router>
    </div>
  );
}

export default App;
