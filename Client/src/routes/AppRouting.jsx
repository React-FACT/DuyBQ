import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/admin/Dashboard';
class AppRouting extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Dashboard} path='/' />
        </Switch>
      </Router>
    );
  }
}
export default AppRouting;
