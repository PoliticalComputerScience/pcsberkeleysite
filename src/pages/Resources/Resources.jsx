// @flow
import React, { Component } from 'react';
import './Resources.scss';
import Container from "react-bootstrap/Container";
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Blocs from './projectpics/blocs.png';
import Darp from './projectpics/darp.png';
import ElectionWatch from './projectpics/electionwatch.png';
import Textualism from './projectpics/textualism.png';
import Pundit from './projectpics/pundit.png';
import Carbon from './projectpics/carbon.png';
import Fakebook from './projectpics/fakebook.png';
import Polar from './projectpics/polar.png';
import Map from './projectpics/map.png';
import Education from './projectpics/education.png';

const Resources = () => {
  return (
    <div className="Resources">
      <h1>Projects</h1>
      <p><center>Below are some of our featured projects! Check back to see more updates throughout the semester.</center></p>
      <br />

      <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3 py-2">
          <div class="card bg-light border-dark h-100">
              <div class="card-block">
                <img class="card-img-top img-fluid" src={Darp} alt="Card image cap" />
                  <h4 class="card-title"><center>Data Access Rights & Privacy</center></h4>
                  <p class="card-text">DARP is a visualization tool that compares data access, rights, and privacy laws around the world.</p>
                  <a class="linky" href="https://medium.com/pcs-berkeley/data-access-rights-privacy-def32474426c"><center>Link</center></a>
              </div>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 py-2">
          <div class="card bg-light border-dark h-100">
              <div class="card-block">
                <img class="card-img-top img-fluid" src={Pundit} alt="Card image cap" />
                  <h4 class="card-title"><center>Political Pundit</center></h4>
                  <p class="card-text">An Amazon Alexa skill that provides personalized, voice-prompted information about Congress.</p>
                  <a class="linky" href="https://medium.com/pcs-berkeley/political-pundit-91cd97b5e3ff"><center>Link</center></a>
              </div>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 py-2">
          <div class="card bg-light border-dark h-100">
              <div class="card-block">
                <img class="card-img-top img-fluid" src={Blocs} alt="Card image cap" />
                  <h4 class="card-title"><center>Roll Call 1</center></h4>
                  <p class="card-text">What can congressional voting patterns tell us?</p>
                  <a class="linky" href="https://medium.com/pcs-berkeley/roll-call-what-can-congressional-voting-patterns-tell-us-e13f580c137f"><center>Link</center></a>
              </div>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 py-2">
          <div class="card bg-light border-dark h-100">
              <div class="card-block">
                <img class="card-img-top img-fluid" src={Textualism} alt="Card image cap" />
                  <h4 class="card-title"><center>Textualism (part 1)</center></h4>
                  <p class="card-text">An exploratory analysis on differences and similarities of words used in legal contexts.</p>
                  <a class="linky" href="https://medium.com/pcs-berkeley/textualism-part-1-7900046e1d1a"><center>Link</center></a>
              </div>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 py-2">
          <div class="card bg-light border-dark h-100">
              <div class="card-block">
                <img class="card-img-top img-fluid" src={Carbon} alt="Card image cap" />
                  <h4 class="card-title"><center>Cut the Carb(on)</center></h4>
                  <p class="card-text">Carbon Regulation: friend or foe? A brief history.</p>
                  <a class="linky" href="https://medium.com/pcs-berkeley/carbon-regulation-friend-or-foe-a-brief-history-5675d0dfe2a0"><center>Link</center></a>
              </div>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 py-2">
          <div class="card bg-light border-dark h-100">
              <div class="card-block">
                <img class="card-img-top img-fluid" src={Fakebook} alt="Card image cap" />
                  <h4 class="card-title"><center>Fakebook</center></h4>
                  <p class="card-text">On Facebook and fake news.</p>
                  <a class="linky" href="https://medium.com/pcs-berkeley/on-facebook-and-fake-news-eb1fe07c650b"><center>Link</center></a>
              </div>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 py-2">
          <div class="card bg-light border-dark h-100">
              <div class="card-block">
                <img class="card-img-top img-fluid" src={Education} alt="Card image cap" />
                  <h4 class="card-title"><center>PolitiCS: On Education and Achievement Gaps</center></h4>
                  <p class="card-text">Using data science to analyze the male-female achievement gap phenomena.</p>
                  <a class="linky" href="https://medium.com/pcs-berkeley/on-education-and-achievement-gaps-df57efa34c88"><center>Link</center></a>
              </div>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 py-2">
          <div class="card bg-light border-dark h-100">
              <div class="card-block">
                <img class="card-img-top img-fluid" src={Polar} alt="Card image cap" />
                  <h4 class="card-title"><center>Political Polarization</center></h4>
                  <p class="card-text">A project to change the dialogue around congressional legislation. Which bills become polarized?</p>
                  <a class="linky" href="https://medium.com/pcs-berkeley/political-polarization-48427a19f044"><center>Link</center></a>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Resources;
