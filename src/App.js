import React from 'react';
import MembersPage from './MembersPage';
import ReposPage from './ReposPage';
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>GitHub Organization: facebook</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/orgs/facebook/repos">
                Repos
              </NavLink>
            </li>
            <li>
              <NavLink to="/orgs/facebook/members">
                Members
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact={true} />
          <Route path="/orgs/facebook/members">
            <MembersPage />
          </Route>
          <Route path="/orgs/facebook/repos">
            <ReposPage />
          </Route>  
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}