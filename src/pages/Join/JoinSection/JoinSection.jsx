// @flow
import React from 'react';
import './JoinSection.scss';
import image from 'assets/home/group_photo.jpg';

const JoinSection = (props) => {
  return (
    <section className="Description">
      <div className="description-top">
        <h2 className="description-heading">Recruitment</h2>
        <div className="description-mission" role="text">
        <br />
        </div>
      </div>
      <div className="description-main">
        <p>
          Thank you for your interest in PCS@Berkeley!
          <br />
          <br/ >
          We will be hosting virtual recruitment events, including two
          information sessions regarding our club, upcoming projects, and
          a walkthrough of our application process. You'll be able to meet
          our current leadership team and ask us any questions you may have.
          <br />
          <br />
          <center><b>Important Dates:</b></center>
          <ul>
            <li><a href="https://berkeley.zoom.us/j/97414138641">
            Zoom information session:</a> September 4, 2020 at 7PM (PST)</li>
            <li>Application due date: September 10, 2020 at 11:59PM (PST)</li>
            <li>Zoom "coffee chats": September 13 - September 15</li>
            <li>Decisions Released: September 16</li>
          </ul>
          Can't make it because of a class conflict or time zone issues?
          No problem.
          <a href="mailto:pcs.berkeley@gmail.com"> Shoot us an email </a>
          or
          <a href="https://www.facebook.com/PCSatBerkeley/"> message us on Facebook</a>,
          and we'll send you a screen recording and answer any of your questions there.
        </p>

        <p>
          📖 <a href="https://forms.gle/KPoar5Piy5SXGFoD9">Apply as a political researcher here.</a>
          <br />
          <br />
          💻 <a href="https://forms.gle/GX6Vz2Awa7kn9qnf7">Apply as a programmer here.</a>
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};



export default JoinSection;
