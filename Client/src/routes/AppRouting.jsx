import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './Routes';
class AppRouting extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(({ component, path }, index) => {
            return <Route key={index} component={component} path={path} />;
          })}
        </Switch>
      </Router>
    );
  }
}
export default AppRouting;
