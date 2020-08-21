import React from 'react';
import './Leadership.scss';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'

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
        <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</CardDeck>
      </div>
    </section>
  );
};

export default Leadership;
