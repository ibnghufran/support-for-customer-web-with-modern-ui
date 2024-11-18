import React from "react";
import { Form } from "react-bootstrap";

const Step3 = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <Form.Label>Payment Mode</Form.Label>
      <Form.Check
        type="radio"
        label="Credit/Debit Card"
        name="paymentMode"
        value="Credit/Debit Card"
        onChange={handleChange}
        checked={formData.paymentMode === "Credit/Debit Card"}
      />
      <Form.Check
        type="radio"
        label="UPI"
        name="paymentMode"
        value="UPI"
        onChange={handleChange}
        checked={formData.paymentMode === "UPI"}
      />
      <Form.Check
        type="radio"
        label="Net Banking"
        name="paymentMode"
        value="Net Banking"
        onChange={handleChange}
        checked={formData.paymentMode === "Net Banking"}
      />
      <Form.Check
        type="radio"
        label="Other"
        name="paymentMode"
        value="Other"
        onChange={handleChange}
        checked={formData.paymentMode === "Other"}
      />
    </div>
  );
};

export default Step3;
