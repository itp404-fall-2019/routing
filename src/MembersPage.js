import React from 'react';
import { fetchMembers } from './GitHubApi';
import MemberImage from './MemberImage';
import Loading from './Loading';

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
      <div className="members">
        {this.state.loading ? <Loading /> : this.state.members.map((member) => {
          return <MemberImage member={member} key={member.id} />
        })}
      </div>
    );
  }
}