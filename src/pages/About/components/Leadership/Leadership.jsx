import React, { Component } from 'react';
import './Leadership.scss';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import HorizontalScroller from 'react-horizontal-scroll-container';
import ScrollContainer from 'react-indiana-drag-scroll';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


import Ian from '../../../../assets/about/Headshots/ian.jpg';
import Chris from '../../../../assets/about/Headshots/christopher.jpg';
import Kelly from '../../../../assets/about/Headshots/kelly.jpg';
import Sophie from '../../../../assets/about/Headshots/sophie.jpg';

// import Shreya from '../../../../assets/about/Headshots/shreya.jpg';
// import Arunan from '../../../../assets/about/Headshots/arunan.jpg';
// import Allen from '../../../../assets/about/Headshots/allen.jpg';
// import Sara from '../../../../assets/about/Headshots/sara.jpg';
// import Anav from '../../../../assets/about/Headshots/anav.jpg';
// import Uzoma from '../../../../assets/about/Headshots/uzoma.jpg';
// import Elyse from '../../../../assets/about/Headshots/elyse.jpg';
// import Ebru from '../../../../assets/about/Headshots/ebru.jpg';
// import Tyler from '../../../../assets/about/Headshots/tyler.jpg';
// import Chenyu from '../../../../assets/about/Headshots/chenyu.jpg';
// import Estelle from '../../../../assets/about/Headshots/estelle.jpg';
// import Sarat from '../../../../assets/about/Headshots/sarat.jpg';


const Leadership = () => {
  return (
    <section className="about-leadership">
    <div className="about-leadership-container">
      <div className="about-leadership-beginning">
        <h2><center>Leadership</center></h2>

          <p><center>
          PCS@Berkeley holds yearly elections for
          club members to fill the board committee. Our board is made up of
          four roles:
          </center></p>

        </div>
      <div class="container">
    <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
                <img class="card-img-top img-fluid" src={Ian} alt="Card image cap" />
                <div class="card-block">
                    <p class="card-text"><small class="text-muted"> </small></p>
                    <h4 class="card-title"><center>Ian Joffe</center></h4>
                    <p class="card-text"><center>President</center></p>
                    <p class="card-text"><small class="text-muted">(he/him)</small></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
                <img class="card-img-top img-fluid" src={Chris} alt="Card image cap" />
                <div class="card-block">
                    <p class="card-text"><small class="text-muted"> </small></p>
                    <h4 class="card-title"><center>Christopher Yun</center></h4>
                    <p class="card-text"><center>Internal VP</center></p>
                    <p class="card-text"><small class="text-muted">(he/him)</small></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
                <img class="card-img-top img-fluid" src={Sophie} alt="Card image cap" />
                <div class="card-block">
                    <p class="card-text"><small class="text-muted"> </small></p>
                    <h4 class="card-title"><center>Sophie Duryee</center></h4>
                    <p class="card-text"><center>Projects VP</center></p>
                    <p class="card-text"><small class="text-muted">(she/her)</small></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
                <img class="card-img-top img-fluid" src={Kelly} alt="Card image cap" />
                <div class="card-block">
                    <p class="card-text"><small class="text-muted"> </small></p>
                    <h4 class="card-title"><center>Kelly Ye</center></h4>
                    <p class="card-text"><center>External VP</center></p>
                    <p class="card-text"><small class="text-muted">(she/her)</small></p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </section>
  );
};

export default Leadership;
