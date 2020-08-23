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
        <div className="about-roles-container">
        <p>Coming soon...</p>
      </div>
      <ScrollContainer className='cb-draggable-row-container'>
        <Container>
          <Row noGutters className='cb-draggable-row-row'>
            <div className='cb-card cb-draggable-row-card'>
              <div className='cb-card-body'>
                <h2 className='cb-club-structure-card-title'>Test1</h2>
                <p className='cb-club-structure-card-text'>Text1</p>
              </div>
            </div>
            <div className='cb-card cb-draggable-row-card'>
              <div className='cb-card-body'>
                <h2 className='cb-club-structure-card-title'>Test2</h2>
                <p className='cb-club-structure-card-text'>Text2</p>
              </div>
            </div>
            <div className="cb-draggable-row-hidden"></div>
          </Row>
        </Container>
      </ScrollContainer>
    </div>



    </section>
  );
};

export default Leadership;
