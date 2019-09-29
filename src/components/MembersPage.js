import React from 'react';
import MemberImage from './MemberImage';
import Loading from './Loading';
import { fetchMembers } from './../GitHubApi';

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
              return <MemberImage member={member} key={member.id} />
            })}
          </div>
        )}
      </div>
    );
  }
}