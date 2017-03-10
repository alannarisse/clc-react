import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import wit from '../images/arisse_wit.png';


export default class News extends React.Component {
  render() {
    return (

      <Grid id="news">
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h2>What's Cookin'</h2>
            <Grid id="news">
              <Row className="show-grid feature">
                <Col xs={12} sm={6} md={4}>
                  <h3>The Tech Gender Gap</h3>
                  <p>In Fall 2016 I researched and wrote an article about the gender gap that exists in technology and looked into organizations who's mission it is to fix this problem.</p>
                  <a href="https://austinstartups.com/the-tech-gender-gap-a-2016-progress-report-on-women-coders-c704a2d6039c#.okbt7x4mp"><img src={wit} className="art_thumb" alt="women in tech"/></a>
                  <ButtonToolbar>
                    <Button  href="https://austinstartups.com/the-tech-gender-gap-a-2016-progress-report-on-women-coders-c704a2d6039c#.okbt7x4mp" bsSize="small">Read Article</Button>
                  </ButtonToolbar>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <h3>Blog</h3>
                  <p>I share articles and write about web dev technologies and movements. I am espectially interested in coding for kids and technology meetups for women.</p>
                  <ButtonToolbar>
                    <Button  href="http://codelovecode.com/blog" bsSize="small">Visit Blog</Button>
                  </ButtonToolbar>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <h3>Hire Me</h3>
                  <p>Hi, I'm Alanna. I live in Portland, Oregon. I am a seasoned front-end web developer with JS framework experience. I am looking for my forever job in Portland Oregon as a front-end developer with potential for full stack development experiences.</p>
                  <p>Why hire me?</p>
                  <ul>
                    <li>I am a crackerjack</li>
                    <li>I have been developing websites since 1998.</li>
                    <li>I am really funny and people like me.</li>
                    <li>I have a masters degree, which makes me a master of myself.</li>
                    <li>I made a giant <a href="http://alannarisse.com/blog/art/portfolio/chasing-the-whale/" target="_blank">25 foot whale</a> out of PVC pipes and canvas.</li>
                    <li>I like <a href="https://www.youtube.com/watch?v=77-cBl5KVaA" target="_blank">old kung fun movies</a>.</li>
                  </ul>
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
