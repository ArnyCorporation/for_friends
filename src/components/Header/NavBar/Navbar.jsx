import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Nav, Logo, Ul, Li,
} from './Navbar.styled';

const Navbar = () => (
  <Nav>
    <Logo>Max</Logo>
    <Ul>
      <Li>
        <Link to="/giphy">Giphy</Link>
      </Li>
      <Li>
        <Link to="/spoonacular">Spoonacular</Link>
      </Li>
    </Ul>
  </Nav>
);

export default Navbar;
