import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./core/routes";
import RouteWithSubRoutes from "./core/routewithsubroutes";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Router>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
