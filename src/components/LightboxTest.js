import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import wit from '../images/arisse_wit.png';


export default class LightboxTest extends React.Component {
  render() {
    return (

      <Grid id="lightbox">
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h2>Web Developer Portfolio</h2>
            <Grid id="examples">
              <Row className="show-grid feature">
                <Col xs={3} md={4}>
                  <h3>The Tech Gender Gap</h3>
                  <p>In Fall 2016 I researched and wrote an article about the gender gap that exists in technology and looked into organizations who's mission it is to fix this problem.</p>
                  <img src={wit} className="art_thumb" alt="women in tech"/>
                  <ButtonToolbar>
                    <Button  href="https://austinstartups.com/the-tech-gender-gap-a-2016-progress-report-on-women-coders-c704a2d6039c#.okbt7x4mp" bsSize="small">Read Article</Button>
                  </ButtonToolbar>
                </Col>
                <Col xs={3} md={4}>
                  <h3>Blog</h3>
                  <p>I share articles and write about web dev technologies and movements. I am espectially interested in coding for kids and technology meetups for women.</p>
                  <ButtonToolbar>
                    <Button  href="http://codelovecode.com/blog" bsSize="small">Visit Blog</Button>
                  </ButtonToolbar>
                </Col>
                <Col xs={3} md={4}>
                  <h3>Hire Me</h3>
                  <p>I am a seasoned front-end web developer with JS framework experience. I am looking for my forever job in Portland Oregon.</p>
                  <ButtonToolbar>
                    <Button  href="http://alannarisse.com/webdev" bsSize="small">View My Portfolio</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
    );
  }
}
