import React, { Component, Fragment } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-div">
        <h2>HypeRelease v0.1</h2>
        <small>created by Mike Marlow</small>
        <p>A site built with React, propped up
          with a NodeJS/Express server as webscraper & API.
          The scraped data is stored as JSON on the firebase deployed
          API.
          View the repo here:
          <a src="https://www.github.com/Vision-X/HypeRelease"></a>
        </p>
      </div>
    )
  }
}

export default About;