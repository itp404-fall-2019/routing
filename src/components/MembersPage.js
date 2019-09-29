import React from 'react';
import MemberImage from './MemberImage';
import MemberDetails from './MemberDetails';
import Loading from './Loading';
import { fetchMembers } from './../GitHubApi';
import { Route, Link } from 'react-router-dom';

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
        {this.state.loading ? <Loading /> : (
          <div className="members">
            {this.state.members.map((member) => {
              return (
                <Link to={`/orgs/facebook/members/${member.login}`} key={member.id}>
                  <MemberImage member={member} />
                </Link>
              );
            })}
          </div>
        )}
        <Route path={`/orgs/facebook/members/:login`} component={MemberDetails} />
      </div>
    );
  }
}