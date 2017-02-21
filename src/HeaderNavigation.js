import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

export default class HeaderNavigation extends React.Component {
  render() {
    let brand = <a href='#'>Project Name</a>;
    return (
      <Navbar brand={brand} fixedTop toggleNavKey={0}>
        <Nav right eventKey={0}>
        <li><a href="#artists">artists</a></li>
        <li><a href="#news" activeClassName="active">news</a></li>
        <li><a href="http://codelovecode.com/blog">blog</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
        </Nav>
      </Navbar>
    );
  }
}
