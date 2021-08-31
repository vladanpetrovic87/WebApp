import { Fragment, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./Header/Header.jsx";
import { BlogList } from "./BlogList/BlogList.jsx";
import { HomePage } from "../components/HomePage/HomePage.jsx";
import { AboutPage } from "../components/AboutPage/AboutPage.jsx";

import "./App.css";

const NotfoundPage = () => <div>Page not found</div>;

const SingleBlogPage = (props) => {
  console.log(props);
  return (
  <div>This is single blog with id: {props.match.params.id}</div>)
}

function App() {
  return (
    //Decomposed Page
    // <Header />
    // <BlogList>
    //   <BlogItems />
    //   <BlogItems />
    //   <BlogItems />
    // </BlogList>

    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/blog" component={BlogList} />
        <Route path="/blog/:id" component={SingleBlogPage} />
        <Route path="/not-found" component={NotfoundPage} />
        <Redirect from="/" to="/not-found" />
      </Switch>
    </Fragment>
  );
}

class SmartApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Vladan",
      isLoggedIn: false,
    };
    this.onLogIn = this.onLogIn.bind(this);
  }

  onLogOut = () => this.setState({ isLoggedIn: false });

  onLogIn() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { isLoggedIn, user } = this.state;
    console.log(this.state);
    return (
      <Fragment>
        <Header
          isLoggedIn={isLoggedIn}
          onLogIn={this.onLogIn}
          onLogOut={this.onLogOut}
          name={user}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogList} />
          <Route path="/blog/:id" component={SingleBlogPage} />
          <Route path="/not-found" component={NotfoundPage} />
          <Redirect from="/" to="/not-found" />
        </Switch>
      </Fragment>
    );
  }
}

export { SmartApp, App };
