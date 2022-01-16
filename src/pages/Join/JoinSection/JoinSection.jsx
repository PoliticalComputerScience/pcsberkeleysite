// @flow
import React from 'react';
import './JoinSection.scss';
import image from 'assets/home/spring2022recruitment.png';

const JoinSection = (props) => {
  return (
    <section className="Description">
      <div className="description-top">
        <h2 className="description-heading">Spring 2022 Recruitment</h2>
        <div className="description-mission" role="text">
        {/* <br /> */}
        </div>
        <div className="description-image-container">
          <img
            className="description-image"
            src={image}
            alt="PCS Spring 2022 Recruitment Schedule."
          />
        </div>
      </div>
      <div className="description-main">
        <p>
          Thank you for your interest in PCS@Berkeley!
          <br />
          <br/ >
          We will be hosting In-person and virtual recruitment events, including two
          information sessions regarding our club, upcoming projects, and
          a walkthrough of our application process. You'll be able to meet
          our current leadership team and ask us any questions you may have.
          <br />
          <br />
          <p style={{textAlign: 'center', fontSize: 28}}>
          📝 <a href="https://docs.google.com/forms/d/e/1FAIpQLSdg6PSTVPtl7Q1obaLn6CmjVhV_oiaQUM9vUqT1C3fbIFRLhw/viewform?usp=sf_link">Interest Form</a> 
          <br />
          <br />
        </p>
          <center><b>Important Dates:</b></center>
          <ul>
            <li> Information sessions:
              <ol>
                <li>Tuesday January 25<sup>th</sup>, 2022 at 8PM <b>Location TBD</b> (<a href="https://berkeley.zoom.us/j/96134142264" target="_blank" rel='noopener noreferrer'>Zoom</a>)</li>
                <li>Saturday January 29<sup>th</sup>, 2022 at 3PM <b>Location TBD</b> (<a href="https://berkeley.zoom.us/j/98298576268" target="_blank" rel='noopener noreferrer'>Zoom</a>)</li>
              </ol>
            </li>
            <li>Applications Due: Wednesday February 2<sup>nd</sup> 11:59PM PST</li>
            <li>Coffee Chats: Monday September 5<sup>th</sup> - 6<sup>th</sup> (Invite Only)</li>
          </ul>
          <p style={{textAlign: 'center', fontSize: 28}}>
          <br />
          💻 <a href="https://docs.google.com/forms/d/e/1FAIpQLSePtJaMeFUOS6bBMZAVGBX4pcgF7JKZEpF-PEjZDuEEAM4cTg/viewform?usp=sf_link">Apply Here!</a> 
          <br />
          <br />
        </p>
          Have any questions?
          No problem.
          <a href="mailto:pcs.berkeley@gmail.com"> Shoot us an email </a>
          or
          <a href="https://www.facebook.com/PCSatBerkeley/"> message us on Facebook</a>,
          and we'll reach out to you.
        </p>

        
      </div>
    </section>
  );
};



export default JoinSection;
