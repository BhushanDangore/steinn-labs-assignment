import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./assets/sass/index.scss";
import routes from "./routes";
import { StoreProvider } from "./store";
import NavigationBar from "./components/NavigationBar";

function App() {
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

  return (
    <div className="App">
      <Router>
        <StoreProvider>
          <NavigationBar />
          <Switch>{root}</Switch>
        </StoreProvider>
      </Router>
    </div>
  );
}

export default App;
