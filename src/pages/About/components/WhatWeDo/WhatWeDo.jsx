import React from 'react';
import Activity from './Activity';
import HackathonActivity from './HackathonActivity';
import './WhatWeDo.scss';
import friendsImage from 'assets/about/activities/retreatdinner.jpg';
import learnImage from 'assets/about/activities/learnpls.jpg';
import fillerImage from 'assets/about/activities/plantlol.jpg';

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

          {/* Learn baby learn */}
          <HackathonActivity
            componentClass="about-activity-hackathon"
            image={learnImage}
            imageAlt="Winners of a hackathon with some team members from Brooklyn College."
            title="Skill Up at our Workshops"
            subtitle="(Get that 3.3 CS GPA with us!)"
            description={[
              'We want our members to succeed in their academic and professional lives. No gatekeeping here–– many of our upperclassmen members collaborate with our development chair to create workshops to share their skills and knowledge gained in upper division courses and internships',
              'We also host various panels and events with professionals, both in computer science and political science, so you can get to learn more about experiences in the industry.',
              'Want your resume reviewed or practice for an upcoming interview? We’ve got you covered.',
            ]}
          />

          {/* Community babey */}
          <Activity
            componentClass="about-activity-collaborate-build-conquer"
            image={friendsImage}
            imageAlt="Fall 2019 Retreat."
            title="Make Friends <3"
            description={`
            To foster our sense of community in PCS@Berkeley, we host many social events for our
            members to get to know each other on a more personal level. In the past, we’ve hosted
            weekend retreats, video game tournament nights, and debate watch parties. We believe
            that as we transition back into in-person teaching,  it is now more important than ever to build up
             a tight-knit community among our members. This semester, we will be hosting a variety
              of social events so that our members, especially new freshmen and transfer
              students, can develop friendships they otherwise would not have made on campus.
          `}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
