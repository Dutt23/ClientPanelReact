import React, { Component } from "react";
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {UserIsAuthenticated,UserIsNotAuthenticated} from './helpers/auth'
import { Provider } from "react-redux";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />

                <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
                <Route exact path="/clients/add" component={UserIsAuthenticated(AddClient)} />
                <Route exact path="/clients/:id" component={UserIsAuthenticated(ClientDetails)} />
                <Route exact path="/clients/edit/:id" component={UserIsAuthenticated(EditClient)} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
