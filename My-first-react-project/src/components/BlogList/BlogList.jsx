import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
// import { render } from 'react-dom';

import { blogPosts } from "../../data/blog-posts.js";
import { getBlogs } from "../../services/blogService.js";

import { Blog } from "../Blog/Blog";
import "./BlogList.css";


//Funkcionalna komponenta

// export const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);


//   useEffect(() => {
//     getBlogs().then((blogs) => {
//       setBlogs({ blogs });
//     });
//   }, [])

//   if (blogs.length === 0) return <div>Loading...</div>;

//   return (
//     <div className="blogList">
//     {/* <span>{count}</span>
//     <button onClick={this.onCountClick}>Click me!</button> */}
//     {blogs.map((post, index) => (
//       <Blog post={post} isAuthorised={true} key={index} />
//     ))}
//   </div>
// );
// }


// Klasna komponenta

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
