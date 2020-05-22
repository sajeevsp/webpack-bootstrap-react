import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class Home extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to example site</h1>
          <p>This is an example site built using ReactJS, Bootstrap.</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Home;
