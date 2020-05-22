import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class About extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>About example site</h1>
          <p>This is an example site built using ReactJS, Bootstrap.</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default About;
