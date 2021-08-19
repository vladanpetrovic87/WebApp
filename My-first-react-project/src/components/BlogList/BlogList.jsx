import React, { Component } from "react";
// import { render } from 'react-dom';

import { blogPosts } from "../../data/blog-posts.js";
import { getBlogs } from "../../services/blogService.js";

import { Blog } from "../Blog/Blog";
import "./BlogList.css";

export class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      count: 0,
    };

    this.onCountClick = this.onCountClick.bind(this);
  }

  componentDidMount() {
    getBlogs().then((blogs) => {
      this.setState({ blogs });
    });
  }

  onCountClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    if (this.state.blogs.length === 0) return <div>Loading...</div>;
    const { count } = this.state;
    return (
      <div className="blogList">
        <span>{count}</span>
        <button onClick={this.onCountClick}>Click me!</button>
        {this.state.blogs.map((post, index) => (
          <Blog post={post} isAuthorised={true} key={index} />
        ))}
      </div>
    );
  }
}
