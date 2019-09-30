import React from 'react';
import MembersPage from './components/MembersPage';
import ReposPage from './components/ReposPage';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>GitHub Organization: facebook</h1>
        <nav>
          <Link to="/orgs/facebook/repos">Repos</Link>
          <Link to="/orgs/facebook/members">Members</Link>
        </nav>
        <Switch>
          <Route path="/" exact={true} />
          <Route path="/orgs/facebook/members" component={MembersPage} />
          <Route path="/orgs/facebook/repos" component={ReposPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}