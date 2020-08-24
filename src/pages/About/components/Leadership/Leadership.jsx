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
import Anav from '../../../../assets/about/Headshots/anav.jpg';
import Uzoma from '../../../../assets/about/Headshots/uzoma.jpg';
import Elyse from '../../../../assets/about/Headshots/elyse.jpg';
import Ebru from '../../../../assets/about/Headshots/ebru.jpg';
import Tyler from '../../../../assets/about/Headshots/tyler.jpg';
import Chenyu from '../../../../assets/about/Headshots/chenyu.jpg';
import Estelle from '../../../../assets/about/Headshots/estelle.jpg';


const Leadership = () => {
  return (
    <section className="about-leadership">
    <div className="about-leadership-container">
      <div className="about-leadership-beginning">
        <h2>Leadership</h2>

          <p>
          PCS@Berkeley holds yearly elections for
          club members to fill the board committee. Our board is made up of
          eight roles with the following responsibilities:
          </p>

        </div>
      <div class="container">
    <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
              <div class="card-header">President</div>
                <img class="card-img-top img-fluid" src={Anav} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title"><center>Anav Mittal</center></h4>
                    <p class="card-text">Oversees club development and direction, manages board meetings, assists board members and project groups when additional help is needed.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
              <div class="card-header">Projects VP</div>
                <img class="card-img-top img-fluid" src={Uzoma} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title"><center>Uzoma Nwakuche</center></h4>
                    <p class="card-text">Develops project ideas and implementation throughout the semester.
                    Oversees the progress throughout the semester, assisting in development when needed,
                    and maintenance of the club’s codebase.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
              <div class="card-header">External VP</div>
                <img class="card-img-top img-fluid" src={Ebru} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title"><center>Ebru Odok</center></h4>
                    <p class="card-text">Leads recruitment efforts, manages social media platforms and webpage,
                     collaborates with other student organizations to host workshops and events. </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
         <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
              <div class="card-header">Internal VP</div>
                <img class="card-img-top img-fluid" src={Elyse} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title"><center>Elyse Garreau</center></h4>
                    <p class="card-text"><small class="text-muted">she/her</small></p>
                    <p class="card-text">Oversees all internal affairs, leads weekly meetings,
                    assists in planning and execution of all clubwide events.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
         <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
              <div class="card-header">DeCal Chair</div>
                <img class="card-img-top img-fluid" src={Tyler} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title"><center>Tyler Nunez</center></h4>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card bg-light border-dark h-100">
              <div class="card-header">Industry Chair</div>
                <img class="card-img-top img-fluid" src={Chenyu} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title"><center>Chenyu Shi</center></h4>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 py-2">
           <div class="card bg-light border-dark h-100">
              <div class="card-header">Education Chair</div>
               <img class="card-img-top img-fluid" src={Estelle} alt="Card image cap" />
               <div class="card-block">
                   <h4 class="card-title"><center>Estelle Rai</center></h4>
                   <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
               </div>
           </div>
       </div>
       <div class="col-md-6 col-lg-4 col-xl-3 py-2">
          <div class="card bg-light border-dark h-100">
            <div class="card-header">Social Chair</div>
              <img class="card-img-top img-fluid" src={Ebru} alt="Card image cap" />
              <div class="card-block">
                  <h4 class="card-title"><center>Sarat Kotthakota</center></h4>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
