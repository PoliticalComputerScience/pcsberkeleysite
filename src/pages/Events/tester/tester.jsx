import React from 'react';
import Activity from '../../About/components/WhatWeDo/Activity';
import HackathonActivity from '../../About/components/WhatWeDo/HackathonActivity';
import './tester.scss';
import friendsImage from 'assets/about/activities/friends.jpeg';
import learnImage from 'assets/about/activities/learnpls.jpg';
import fillerImage from 'assets/about/activities/filler.jpg';

const WhatWeDo = () => {
  return (
    <section className="about-what-we-do">
      <div className="about-what-we-do-container">
        <div className="about-what-we-do-beginning">
          <h2>What We Do</h2>
        </div>

        <div className="about-activities-container">
          {/* Collaborate & Build */}
          <Activity
            componentClass="about-activity-skill-up"
            image={fillerImage}
            imageAlt="Students gathered in an event venue viewing a presentation from the presenter."
            title="Collaborate & Build"
            description={`
              Political Computer Science at Berkeley is a project-based club that utilizes computer science to
              address political problems. As a member, you'll be put onto one of our project teams for the
              whole semester. You'll be able to participate as a computer programmer or a political researcher,
               depending on your preference and your background. You'll meet with your project team once per week,
               building and learning together.
          `}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
