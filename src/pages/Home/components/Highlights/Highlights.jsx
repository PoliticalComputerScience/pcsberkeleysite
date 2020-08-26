// @flow
import React from 'react';
import Highlight from './Highlight/';
import './Highlights.scss';

import learn from 'assets/home/highlights/learn.jpg';
import collaborate from 'assets/home/highlights/collaborate.jpg';
import connect from 'assets/home/highlights/connect.jpg';

const descriptions = [
  // Learn
  `Learn something new about political science or tech at our workshops.
  Whether you haven’t written a single line of code or you’ve developed
  your own application, we have academic and professional development
  workshops for you. Through hands-on coding workshops or talks from industry
   professionals, there are plenty of ways to gain knowledge and new skills.
   Our exciting events are open to all PCS members, and select workshops and
   educational events are open to all UC Berkeley students.`,

  // Collaborate
  `Work on one of our project teams with other members to complete a
  political-related technical project by the end of each semester. You’ll be
   able to learn alongside your peers, receiving guidance and mentorship from
   your project manager. As a new member, you’ll also work with other new
   members to complete a PolitiCS mini-project on any political topic of your
   choosing.`,

  // Connect
  `Join us at Super Smash Bros tournaments, karaoke nights, debate watch
  parties, and more! We host many social events throughout the semester so our
  members can get to know each other on a more personal level outside of
  project meetings. We encourage you to meet new people and make new friends
  at PCS.`,
];

const Highlights = () => {
  return (
    <section className="Highlights">
      {/* Learn */}
      <Highlight
        containerClass="highlight-learn"
        title="Learn."
        description={descriptions[0]}
        linkUrl="/join"
        linkText="Apply Now"
        image={learn}
        imageAlt="Learn"
        backgroundColor="#CBE4F9"
      />

      {/* Collaborate */}
      <Highlight
        containerClass="highlight-collaborate"
        title="Collaborate."
        description={descriptions[1]}
        linkUrl="/about"
        linkText="See What We Do"
        image={collaborate}
        imageAlt="Collaborate"
        backgroundColor="#F9D8D6"
      />

      {/* Connect */}
      <Highlight
        containerClass="highlight-connect"
        title="Connect."
        description={descriptions[2]}
        linkUrl="/join"
        linkText="Join The Community"
        image={connect}
        imageAlt="Connect"
        backgroundColor="#EFF9DA"
      />
    </section>
  );
};

export default Highlights;
