import React from "react";
import { Col, Row } from "react-bootstrap";
import Message from "../components/Message";
import { Link } from "react-router-dom";

const CheckoutScreen = () => {
  return (
    <div>
      <Row>
        <Col md={8}>
          <h1 style={{ marginBottom: "20px" }}>Checkout</h1>
          <Message>
            Checkout Page is empty, <Link to="/">go back ⬅</Link>
          </Message>
        </Col>{" "}
      </Row>
    </div>
  );
};

export default CheckoutScreen;
