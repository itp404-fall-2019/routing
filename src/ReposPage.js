import React from 'react';
import { fetchRepos } from './GitHubApi';
import GitHubRepoCard from './GitHubRepoCard';
import Loading from './Loading';

export default class ReposPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loading: true
    };
  }
  async componentDidMount() {
    let repos = await fetchRepos();
    this.setState({ repos, loading: false });
  }
  render() {
    return (
      <div className="repos">
        {this.state.loading ? <Loading /> : this.state.repos.map((repo) => {
            return <GitHubRepoCard repo={repo} key={repo.id} />
        })}
      </div>
    );
  }
}