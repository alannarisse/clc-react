import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';


export default class Events extends React.Component {
  state = {
    myEvents:
    [
      {
        "eventName": "Monthly Mentorship Saturday - Partnership with Metal Toad",
        "orgName": "Chick Tech Portland",
        "eventDate": "2016-03-11 10:00am",
        "eventNotes": "This meetup is about forming self-organizing groups to get unstuck and solve problems together!",
        "eventUrl": "https://www.meetup.com/ChickTech-Portland/events/236998766/"
      },
      {
        "eventName": "Portland ReactJS Presentation Night",
        "orgName": "Portland ReactJS",
        "eventDate": "2017-03-14 06:00pm",
        "eventNotes": "Topics: Putting the P in Preact - Derek Hurley & Taking React's Virtual Dom to the Virtual World- Joe Hsu",
        "eventUrl": "https://www.meetup.com/Portland-ReactJS/events/237905512/"
      },
      {
        "eventName": "PDX Women in Tech (PDXWIT) Happy Hour Networking Event",
        "orgName": "Chick Tech Portland",
        "eventDate": "2016-03-21 4:30pm",
        "eventNotes": "Join us for happy hour at moovel! We know that everyone uses tech tools on a daily basis to conduct your life, so we decided to explore this topic as it relates to your career. At this event, the theme will be \“Simple machines: using your tools to leverage your career\” and the conversation starter will be \“What’s your favorite tech tool?\”",
        "eventUrl": "https://www.meetup.com/ChickTech-Portland/events/238015983/"
      },
      {
        "eventName": "ReactJS Study Night",
        "orgName": "Portland Women Who Code",
        "eventDate": "2016-03-15 5:30pm",
        "eventNotes": "Developers interested in an evening of making React components and talking all things React and React Native. This is not a beginners workshop, but beginners are welcome if prepared to dive in and keep up with us.",
        "eventUrl": "https://www.meetup.com/Women-Who-Code-Portland/events/237128885/"
      }
    ]

   }; //state

   render() {
    var filteredApts = this.state.myEvents;
    filteredApts = filteredApts.map(function(item, index){
      return(
        <li className="pet-item media" key={index}>
          <div className="pet-head">
            <span className="pet-name">{this.state.myEvents[index].eventName}</span>
            <span className="apt-head pull-right">{this.state.myEvents[index].eventDate}</span>
          </div>
          <div className="owner-name">
            <span className="label-item">Owner:</span>
            {this.state.myEvents[index].orgName}
          </div>
          <div className="apt-notes">
            {this.state.myEvents[index].eventNotes}<br/>
            <a href={this.state.myEvents[index].eventUrl} target="_blank">{this.state.myEvents[index].eventUrl}</a>
          </div>
        </li>

        ) //return
    }.bind(this)); //filteredApts map
    return (

      <Grid id="events">
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h2>Portland Tech Events</h2>
            <Grid id="news">
              <Row className="show-grid feature">
                <Col xs={12} sm={8} md={8}>
                  <div className="interface">
                    <ul className="item-list media-list">
                      {filteredApts}
                    </ul>
                  </div>
                </Col>
                <Col xs={12} sm={4} md={4}>
                  <h3>About Me</h3>
                  <p>I am Alanna Risse. I created this website in React.js in
                  order to use it as a learning playground for React. I am not
                  just a one-trick pony! I am an <a href="http://alannarisse.com/blog/" target="_blank">artist</a>.
                  I like to <a href="http://alannarisse.com/blog/writing/">write</a>.
                  I have an adorable 6 year old daughter. I also love to <a href="https://www.strava.com/athletes/13752294" target="_blank">ride bikes</a>.</p>
                  <h3>What I Think About Code</h3>
                  <ul>
                      <li>Code is art</li>
                      <li>Code is cmmunication</li>
                      <li>Code encourages abstract thought</li>
                      <li>Code is a tool for expression</li>
                      <li>Code can bring ideas to light</li>
                  </ul>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
    ); //render
  } //component
}
