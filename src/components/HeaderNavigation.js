import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';


export default class HeaderNavigation extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Nav>
        <li><a href="http://portfolio.alannarisse.com" target="_blank">portfolio</a></li>
        <li><a href="http://codelovecode.com/blog" target="_blank">blog</a></li>
        <li><a href="http://instagram.com/codelovecode" target="_blank">instagram</a></li>
        <li><a href="http://www.twitter.com/alannarisse" target="_blank">twitter</a></li>
        </Nav>
      </Navbar>
    );
  }
}
