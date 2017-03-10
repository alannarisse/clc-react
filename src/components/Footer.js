import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>© <a href="http://alannarisse.com/webdev" target="_blank">Alanna Risse</a> 2017</p>
        </footer>
      </Grid>
    );
  }
}
