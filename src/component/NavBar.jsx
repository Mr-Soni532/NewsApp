import React from "react";
// import DropdownBtn from "./DropdownBtn";
import {LinkContainer} from 'react-router-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  
    return ( 
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
        <LinkContainer to="/"><Navbar.Brand>News@Hub</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{width: "50%", alignItems: "center"}}>
              <LinkContainer to="/"><Nav.Link  to="/">Home</Nav.Link></LinkContainer>
              <LinkContainer to="/business"><Nav.Link  to="/business">Business</Nav.Link></LinkContainer>
              <LinkContainer to="/entertainment"><Nav.Link  to="/entertainment">Entertainment</Nav.Link></LinkContainer>
              <LinkContainer to="/general"><Nav.Link  to="/general">General</Nav.Link></LinkContainer>
              <LinkContainer to="/health"><Nav.Link  to="/health">Health</Nav.Link></LinkContainer>
              <LinkContainer to="/science"><Nav.Link  to="/science">Science</Nav.Link></LinkContainer>
              <LinkContainer to="/sports"><Nav.Link  to="/sports">Sports</Nav.Link></LinkContainer>
              <LinkContainer to="/technology"><Nav.Link  to="/technology">Technology</Nav.Link></LinkContainer>
              {/* <DropdownBtn type="Category" /> */}
            </Nav>
            {/* <Nav style={{width: "50%", justifyContent: "flex-end"}}>
              <DropdownBtn type="Country" />
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    );
  }


