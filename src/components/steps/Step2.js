import React from "react";
import { Form } from "react-bootstrap";

const Step2 = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <Form.Label>Payment Type</Form.Label>
      <Form.Check
        type="radio"
        label="Refund"
        name="paymentType"
        value="Refund"
        onChange={handleChange}
        checked={formData.paymentType === "Refund"}
      />
      <Form.Check
        type="radio"
        label="Pay"
        name="paymentType"
        value="Pay"
        onChange={handleChange}
        checked={formData.paymentType === "Pay"}
      />
      <Form.Check
        type="radio"
        label="Other"
        name="paymentType"
        value="Other"
        onChange={handleChange}
        checked={formData.paymentType === "Other"}
      />
      {(formData.paymentType === "Refund" || formData.paymentType === "Pay") && (
        <Form.Group>
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </Form.Group>
      )}
    </div>
  );
};

export default Step2;
