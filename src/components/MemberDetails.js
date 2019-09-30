import React from 'react';
import { fetchUser } from '../GitHubApi';

export default class MemberDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {}
    }
  }
  componentDidMount = async () => {
    const { login } = this.props.match.params;
    let member = await fetchUser(login);
    this.setState({ member });
  }
  componentDidUpdate = async (prevProps, prevState, snapshot) => {
    const { login } = this.props.match.params;

    if (prevProps.match.params.login !== login) {
      let member = await fetchUser(login);
      this.setState({ member });
    }
  }
  render() {
    const { name, location, login, followers } = this.state.member;
  
    return (
      <div className="text-center">
        <h2>{name} - {login} ({followers})</h2>
        <p>{location}</p>
      </div>
    );
  }
}