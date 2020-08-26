// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import './Ending.scss';

const Ending = ({ width }) => {
  return (
    <section className="Ending">
      <div className="ending-container">
        <EndingText width={width} />
        <Link to="/join">Join the Club</Link>
      </div>
    </section>
  );
};

const EndingText = ({ width }) => {
  if (width < 700) {
    // Vertical phones
    return (
      <h2>
        Where politics meets programming.
      </h2>
    );
  } else {
    // Landscape phones, tablets and desktops
    return (
      // eslint-disable-next-line
      <h2 role="text">
        Where politics meets programming.
      </h2>
    );
  }
};

export default Ending;
