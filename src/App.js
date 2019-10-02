import React from 'react';
import MembersPage from './MembersPage';
import ReposPage from './ReposPage';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>GitHub Organization: facebook</h1>
        <nav>
          <ul>
            <li>
              <Link to="/orgs/facebook/repos">
                Repos
              </Link>
            </li>
            <li>
              <Link to="/orgs/facebook/members">
                Members
              </Link>
            </li>
          </ul>
        </nav>
        <Route path="/orgs/facebook/members">
          <MembersPage />
        </Route>
        <Route path="/orgs/facebook/repos">
          <ReposPage />
        </Route>
      </Router>
    );
  }
}