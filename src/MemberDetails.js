import React from 'react';
import { fetchUser } from './GitHubApi';

export default class MemberDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {}
    };
  }
  componentDidMount = async () => {
    const { login } = this.props.match.params;
    const member = await fetchUser(login);
    this.setState({ member });
  }
  componentDidUpdate = async (previousProps) => {
    const { login } = this.props.match.params;

    if (previousProps.match.params.login !== login) {
      const member = await fetchUser(login);
      this.setState({ member });
    }
  }
  render() {
    const { name, location, followers } = this.state.member;

    return (
      <div>
        <h2>Member Details for @{this.props.match.params.login}</h2>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Followers: {followers}</p>
      </div>
    );
  }
}