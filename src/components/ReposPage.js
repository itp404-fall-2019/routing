import React from 'react';
import GitHubRepoCard from './GitHubRepoCard';
import Loading from './Loading';
import { fetchRepos } from './../GitHubApi';

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
      <div>
        {this.state.loading ? <Loading /> : (
          <div className="repos">
            {this.state.repos.map((repo) => {
              return <GitHubRepoCard repo={repo} key={repo.id} />
            })}
          </div>
        )}
      </div>
    );
  }
}