import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const signout = () => {
    signOut(auth);
  };
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="add">Add Task</Nav.Link>
      </Nav.Item>
      {
        user ?
          <Nav.Link onClick={signout} as={Link} to="">Sign Out</Nav.Link>
          :
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;