import React from 'react';
var Router = require('react-router');
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';


export default class HeaderNavigation extends React.Component {
  render() {
    let brand = <a href='#'>Project Name</a>;
    return (
      <Navbar brand={brand} fixedTop toggleNavKey={0}>
        <Nav right eventKey={0}>
        <li><a href="http://alannarisse.com/webdev" target="_blank">portfolio</a></li>
        <li><a href="http://codelovecode.com/blog" target="_blank">blog</a></li>
        <li><a href="http://instagram.com/codelovecode" target="_blank">instagram</a></li>
        <li><a href="http://www.twitter.com/alannarisse" target="_blank">twitter</a></li>
        </Nav>
      </Navbar>
    );
  }
}
