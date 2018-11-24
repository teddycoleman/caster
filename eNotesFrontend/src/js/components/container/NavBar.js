import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';

const Index = () => <h2>Home</h2>;
const Enotes = () => <h2>All eNotes</h2>;

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">eNotesNow</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavLink to="/enotes/">
                  <Button>All eNotes</Button>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact component={Index} />
          <Route path="/enotes/" component={Enotes} />
        </div>
      </Router>
    );
  }
}
export default NavBar;

const wrapper = document.getElementById("navbar");
wrapper ? ReactDOM.render(<NavBar />, wrapper) : false;
