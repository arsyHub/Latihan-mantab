import React, { Component } from "react";
import IsiBlog from "./IsiBlog";
export default class Oper extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    fetch("http://localhost:3004/posts?_limit=4&_page=1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          post: json,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.post.map((post) => {
          return <IsiBlog key={post.id} title={post.title} desc={post.body} />;
        })}
      </div>
    );
  }
}
