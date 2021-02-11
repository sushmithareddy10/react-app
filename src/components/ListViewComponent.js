import React from "react";
import { Row, Col } from "react-bootstrap";
import gmail from "../images/gmail icon.svg";
import link from "../images/link icon.svg";
function ListViewComponent() {
  return (
    <div className="container">
      <Row>
        <Col  lg="3" className="card-sec-1">
          <div className="checkbox"></div>
          <div className="name">
            <h5>Tony Andrew</h5>
          </div>
        </Col>
        <Col   lg="5" className="card-sec-middle">
          <div className="heading">
            <h5>Updates to our Terms of Service and Privacy Notice</h5>
          </div>
          <div className="para">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </Col>
        <Col  lg="4" className="card-sec-2 card-sec-list">
          <div className="link">
            <img src={link} alt="link-image"></img>
          </div>
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
    </div>
  );
}
export default ListViewComponent;
