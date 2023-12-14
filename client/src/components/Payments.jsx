import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

import "../components/Payments.css";

function Payments() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [phonePeNumber, setPhonePeNumber] = useState("");

  const handlePaymentSelection = (selectedMethod) => {
    setPaymentMethod(selectedMethod);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "upi") {
      console.log("UPI payment details:", upiId);
      // Implement logic for UPI payment processing
    } else if (paymentMethod === "phonepe") {
      console.log("PhonePe payment details:", phonePeNumber);
      // Implement logic for PhonePe payment processing
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Make a Payment</h2>
      <div className="payment-options">
        <Button
          variant={paymentMethod === "upi" ? "primary" : "outline-primary"}
          onClick={() => handlePaymentSelection("upi")}
        >
          UPI
        </Button>
        <Button
          variant={paymentMethod === "phonepe" ? "primary" : "outline-primary"}
          onClick={() => handlePaymentSelection("phonepe")}
        >
          PhonePe
        </Button>
      </div>

      <Form onSubmit={handleSubmit}>
        {paymentMethod === "upi" && (
          <Form.Group controlId="upiId">
            <Form.Label>Enter UPI ID</Form.Label>
            <Form.Control
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </Form.Group>
        )}

        {paymentMethod === "phonepe" && (
          <Form.Group controlId="phonePeNumber">
            <Form.Label>Enter PhonePe Number</Form.Label>
            <Form.Control
              type="text"
              value={phonePeNumber}
              onChange={(e) => setPhonePeNumber(e.target.value)}
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          Pay Now
        </Button>
      </Form>
    </Container>
  );
}

export default Payments;
