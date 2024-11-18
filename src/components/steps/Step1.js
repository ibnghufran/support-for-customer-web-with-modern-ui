import React from "react";
import { Form } from "react-bootstrap";

const Step1 = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Complaint</Form.Label>
        <Form.Control
          as="textarea"
          name="complaint"
          value={formData.complaint}
          onChange={handleChange}
          required
        />
      </Form.Group>
    </div>
  );
};

export default Step1;
