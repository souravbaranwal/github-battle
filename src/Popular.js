import React, { Component } from "react";
import Loading from "./Loading";
import Menu from "./Menu";
import '../node_modules/bulma/'
class Popular extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      loading: false,
      lang: "All"
    };
  }

  componentDidMount = (val = "All") => {
    this.setState({ loading: true });
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${val}&sort=stars&order=desc&type=Repositories`
    )
      .then(res => res.json())
      .then(({ items }) => this.setState({ repos: items, loading: false }));
  };

  handleLinks = val => {
    this.componentDidMount(val);
    this.setState({ lang: val });
  };

  render = () => {
    return (
      <div className='is-centered'>
        <Menu updateSearch={this.handleLinks} />

        <div className='columns is-multiline'>
          {this.state.loading ? (
            <Loading />
          ) : (
            this.state.repos.map((repo, index) => {
              return <Repo repoData={repo} rank={index + 1} key={repo.name} />;
            })
          )}
        </div>
      </div>
    );
  };
}
function Repo(props) {
  const { name, owner } = props.repoData;
  return (
    <div>
      <div className="column">
        <p>{"#" + props.rank}</p>
        <h1>{name}</h1>
        <img
          src={owner.avatar_url}
          style={{ width: "150px", borderRadius: "50%", marginTop: "20px" }}
          alt={"players"}
        />
      </div>
    </div>
  );
}
export default Popular;
