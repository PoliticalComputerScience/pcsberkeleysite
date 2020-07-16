import React from 'react';
import Typewriter from 'typewriter-effect';

import slideshow from 'assets/welcome-slideshow/inspiration.jpg';
// import { Container as div, Row as div, Col as div } from 'react-bootstrap';

const strings = [
  'inspiration.',
  'collaboration.',
  'creativity.',
  'learning.',
  'diversity.',
  'passion.',
];

const typewriterInit = (typewriter) => {
  const typeString = (string, pauseTime) => {
    typewriter.typeString(string).pauseFor(pauseTime).deleteAll(30);
  };

  for (const string of strings) {
    typeString(string, 2500);
    // TODO: Advance the slideshow
  }

  typewriter.start();
};

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-background-container">
        <div className="welcome-container">
          <div className="welcome-content">
            <Slogan />
            <p>
              Learn something new from an industry professional at our events,
              find some team members to build a project with, or just come by
              and make some new friends! The Brooklyn College Computer Science
              Club welcomes you, regardless of your coding experience or major.
            </p>
            <div className="welcome-action-buttons">
              <a className="join-button" href="/join">
                Join&nbsp;the&nbsp;Club
              </a>
              <a className="learn-more" href="#about">
                Learn&nbsp;More
              </a>
            </div>
          </div>

          <div className="welcome-slideshow">
            <img className="slideshow" src={slideshow} alt="Slideshow" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Slogan = () => {
  const typewriterComponent = (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        delay: 30,
        deleteSpeed: 30,
      }}
      onInit={(typewriter) => typewriterInit(typewriter)}
    />
  );

  if (window.innerHeight > window.innerWidth) {
    return (
      <h1>
        A community
        <br /> driven by
        <br />
        {typewriterComponent}
      </h1>
    );
  } else {
    return (
      <h1>
        A community driven
        <br />
        by&nbsp;
        {typewriterComponent}
      </h1>
    );
  }
};

export default Welcome;