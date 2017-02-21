import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';

export default class News extends React.Component {
  render() {
    return (
      <Grid id="news">
        <Col xs={12} md={8} >Here's the news</Col>
        <Col xs={6} md={4} >Side</Col>
      </Grid>
    );
  }
}
