import { Fragment, Component } from "react";

import { Header } from "./Header/Header.jsx";
import { BlogList } from "./BlogList/BlogList.jsx";

import "./App.css";

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
      <BlogList />
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
        <BlogList />
      </Fragment>
    );
  }
}

export { SmartApp, App };
