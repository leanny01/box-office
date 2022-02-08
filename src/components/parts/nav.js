import React from "react";
import { Navbar, Nav, Form,Button,FormControl } from "react-bootstrap";
const nav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Movie-box</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/playing">Now Playing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav