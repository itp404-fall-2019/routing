import React from 'react';
import MemberImage from './MemberImage';
import MemberDetails from './MemberDetails';
import Loading from './Loading';
import { fetchMembers } from './../GitHubApi';
import { Switch, Route, NavLink } from 'react-router-dom';

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
    const { match } = this.props;
    
    return (
      <div>
        {this.state.loading ? <Loading /> : (
          <div className="members">
            {this.state.members.map((member) => {
              return (
                <NavLink to={`${match.path}/${member.login}`} key={member.id}>
                  <MemberImage member={member} />
                </NavLink>
              );
            })}
          </div>
        )}
        <Switch>
          <Route path={`${match.path}/:login`} component={MemberDetails} />
          <Route path={match.path}>
            <h3>Please select a member.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
}