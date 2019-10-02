import React from 'react';
import { fetchMembers } from './GitHubApi';
import MemberImage from './MemberImage';
import Loading from './Loading';
import MemberDetails from './MemberDetails';
import { Switch, Route, Link } from 'react-router-dom';

export default class MembersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      loading: true
    };
  }
  async componentDidMount() {
    let members = await fetchMembers();
    this.setState({ members, loading: false });
  }
  render() {
    return (
      <div>
        <div className="members left-nav">
          {this.state.loading ? <Loading /> : this.state.members.map((member) => {
            return (
              <Link to={`/orgs/facebook/members/${member.login}`} key={member.id}>
                <MemberImage member={member} />
              </Link>
            );
          })}
        </div>
        <div className="main">
          <Switch>
            <Route path="/orgs/facebook/members/:login" component={MemberDetails} />
            <Route path="/orgs/facebook/members">
              <p>Please select a member.</p>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}