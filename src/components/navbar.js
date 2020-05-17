import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src="/images/favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          Example Site
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
