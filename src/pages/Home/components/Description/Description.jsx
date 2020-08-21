// @flow
import React from 'react';
import './Description.scss';
import image from 'assets/home/group_photo.jpg';

const Description = (props) => {
  return (
    <section className="Description">
      <div className="description-top">
        <h2 className="description-heading">Introducing PCS@Berkeley</h2>
        <OpeningParagraph width={props.width} />
        <div className="description-image-container">
          <img
            className="description-image"
            src={image}
            alt="Group photo of PCS@Berkeley club members."
          />
        </div>
        {/* eslint-disable-next-line */}
        <div className="description-mission" role="text">
          <h3 className="description-mission-heading">Our Mission:</h3>
          <MissionContent width={props.width} />
        </div>
      </div>
      <div className="description-main">
        <p>
          Our members study a variety of academic backgrounds, including
          computer science, economics, data science, political science,
          legal studies, political economy, and more. They all have one thing
          in common––a drive to use their abilities to address real and
          current issues. Our club’s diversity of background, thought, and
          political opinion allows us to develop well-rounded, nonpartisan
          softwares, applications, and tools that are meaningful and easy to use.
        </p>

        <p>
          Political Computer Science offers UC Berkeley students a community
          of driven, innovative programmers who are passionate about politics
          and activism.
        </p>
      </div>
    </section>
  );
};

const OpeningParagraph = ({ width }) => {
  if (width < 700) {
    return (
      <p className="description-opening-paragraph">
        We are a nonpartisan student organization that harnesses
         students’ intellectual curiosity and capabilities in technology
         and government affairs to address current issues within legal and
         political systems.
      </p>
    );
  } else {
    return (
      // eslint-disable-next-line
      <p className="description-opening-paragraph" role="text">
      We are a nonpartisan student organization that harnesses
       students’ intellectual curiosity and
        <br />
          capabilities in technology and government affairs to address
         current issues within legal and political systems.
      </p>
    );
  }
};

const MissionContent = ({ width }) => {
  // The line doesn't evenly break until ~716px so we need to up it from 700px
  if (width < 720) {
    return (
      <p className="MissionContent">
         To develop politically centered tech projects and to
         promote the use of technological skills for political advocacy,
         political education, and social good.
      </p>
    );
  } else {
    return (
      // eslint-disable-next-line
      <p className="MissionContent" role="text">
        To develop politically centered tech projects and to
        <br />
        promote the use of technological skills for political
        <br />
        advocacy, political education, and social good.
      </p>
    );
  }
};

export default Description;
