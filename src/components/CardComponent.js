import React from "react";
import { Col, Row } from "react-bootstrap";
import gmail from "../images/gmail icon.svg";
class CardComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col xs="6" sm="8" lg="8" className="card-sec-1">
            <div className="checkbox">
            </div>
            <div className="name">
              <h5>Tony Andrew</h5>
            </div>
          </Col>
          <Col xs="6" sm="4" lg="4" className="card-sec-2">
            <div className="time">
              <p>7:15 PM</p>
            </div>
            <div className="date">
              <p>Jun 3, 2020</p>
            </div>
            <div className="email-image">
              <img src={gmail} alt="email=image"></img>
            </div>
          </Col>
        </Row>
        <Row>
           <Col className="heading">
           <div><h5>AMC spikes 56% on reports</h5></div>
           </Col>
        </Row>
        <Row>
        <Col  xs ="9" md="7" lg="7" className="para">
        <p>AMC spikes 56% on reports that Amazon may be considering a takeover (AMZN, AMC) AMC spikes 56% on reports that Amazon may be considering.
        AMC spikes 56% on reports that Amazon may be considering a takeover (AMZN, AMC) AMC spikes 56%...</p>
      </Col>
        </Row>
      </div>
    );
  }
}
export default CardComponent;
