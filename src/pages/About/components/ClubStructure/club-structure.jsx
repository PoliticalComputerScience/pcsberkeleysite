import React from "react";
// import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollContainer from "react-indiana-drag-scroll";

import './club-structure.scss';
import { CardColors } from "./constants.jsx";
// import "../../styles/club-structure.css";
// import "../../styles/draggable-row.css";

const ClubStructure = () => {
  // const roles = useStaticQuery(graphql`
  //   query {
  //     allAirtable(
  //       filter: { table: { eq: "Roles" } }
  //       sort: { fields: data___Order }
  //     ) {
  //       edges {
  //         node {
  //           data {
  //             Role
  //             Text
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  //
  // const roleData = roles.allAirtable.edges.map((edge, index) => {
  //   const { Role, Text } = edge.node.data
  //   return (
  //     <Col
  //       sm={12}
  //       className={`cb-card cb-draggable-row-card ${
  //         CardColors[index % CardColors.length]
  //       }`}
  //     >
  //       <div className="cb-card-body">
  //         <h2 className="cb-club-structure-card-title">{Role}</h2>
  //         <p className="cb-club-structure-card-text">{Text}</p>
  //       </div>
  //     </Col>
  //   )
  // })

  return (
    <div className="cb-wrapper-gray">
      <Container>
        <div className="cb-club-structure-header">
          <h1 className="cb-section-heading">Club Structure</h1>
          <p className="cb-section-text">
            Throughout their time in Codebase, our members take on a variety of
            positions. Our structure is relatively flat so that everybody has an
            active role in shaping our club.
          </p>
          {/* <a
            className="cb-link-blue"
            href="https://medium.com/berkeley-codebase/the-mentored-project-72db8aabb70e"
          >
            Read about our members’ experiences →
          </a> */}
        </div>
      </Container>
      <ScrollContainer className="cb-draggable-row-container">
        <Container>
        <div className='ebru-container'>
          <Row noGutters className="cb-draggable-row-row">
          <Col sm={12} className='cb-card cb-draggable-row-card cb-card-blue'>
              <div className='cb-card-body'>
                <h2 className='cb-club-structure-card-title'>Title1</h2>
                <p className='cb-club-structure-card-text'>Text 1. I am testing Text 1.</p>
              </div>
            </Col>
            <Col sm={12} className='cb-card cb-draggable-row-card cb-card-navy'>
              <div className='cb-card-body'>
                <h2 className='cb-club-structure-card-title'>Title2</h2>
                <p className='cb-club-structure-card-text'>Text 2. I am testing Text 2.</p>
              </div>
            </Col>
            <Col sm={12} className='cb-card cb-draggable-row-card cb-card-green'>
              <div className='cb-card-body'>
                <h2 className='cb-club-structure-card-title'>Title3</h2>
                <p className='cb-club-structure-card-text'>Text 3. I am testing Text 3.</p>
              </div>
            </Col>
            <div className="cb-draggable-row-hidden"></div>
          </Row>
          </div>
        </Container>
      </ScrollContainer>
    </div>
  )
}

export default ClubStructure;
