// @flow
import React from 'react';
import './JoinSection.scss';
import image from 'assets/home/pcs fall 22 banner.png';

const JoinSection = (props) => {
  return (
    <section className="Description">
      <div className="description-top">
        <h2 className="description-heading">Fall 2022 Recruitment</h2>
        <div className="description-mission" role="text">
        {/* <br /> */}
        </div>
        <div className="description-image-container">
          <img
            className="description-image"
            src={image}
            alt="PCS Fall 2022 Recruitment Schedule."
          />
        </div>
      </div>
      <div className="description-main">
        <p>
          Thank you for your interest in PCS@Berkeley!
          <br />
          <br/ >
          We will be hosting one In-person recruitment event, where
          we'll talk about upcoming projects, and
          a walkthrough of our application process. You'll be able to meet
          our current leadership team and ask us any questions you may have.
          <br />
          <br />
          <p style={{textAlign: 'center', fontSize: 28}}>
          📝 <a href="https://pcs-recruitment.carrd.co">Interest Form</a> 
          <br />
          <br />
        </p>
          <center><b>Important Dates:</b></center>
          <ul>
            <li> Information sessions:
              <ol>
                <li>Wednesday August 31<sup>th</sup>, 2022 at 8PM <b>Dwinelle 130</b></li>
              </ol>
            </li>
            <li>Applications Due: Friday September 2<sup>nd</sup> 11:59PM PST</li>
            <li>Coffee Chats: Monday September 4<sup>th</sup> - 6<sup>th</sup> (Invite Only)</li>
          </ul>
          <p style={{textAlign: 'center', fontSize: 28}}>
          <br />
          💻 <a href="https://pcs-recruitment.carrd.co">Apply Here!</a> 
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
