import React, { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import { database } from "../firebaseConfig";
import { ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const MultiStepForm = () => {
  const [step, setStep] = useState(1); // Current step
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    complaint: "",
    paymentType: "",
    amount: "",
    paymentMode: "",
    creditCardDetails: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    upiDetails: {
      upiPin: "",
      bankName: "",
    },
    netBankingDetails: {
      username: "",
      password: "",
    },
    bankSelection: "",
    additionalBankDetails: {
      accountNumber: "",
      cifNumber: "",
      branchCode: "",
      dob: "",
    },
  });

  const navigate = useNavigate();

  const validateStep = () => {
    // Validation for each step
    switch (step) {
      case 1:
        return formData.fullName && formData.email && formData.mobileNumber && formData.complaint;
      case 2:
        if (formData.paymentType === "Refund" || formData.paymentType === "Pay") {
          return formData.amount;
        }
        return formData.paymentType; // For "Other"
      case 3:
        return formData.paymentMode;
      case 4:
        if (formData.paymentMode === "Credit/Debit Card") {
          const { cardNumber, expiryDate, cvv } = formData.creditCardDetails;
          return cardNumber && expiryDate && cvv;
        }
        if (formData.paymentMode === "UPI") {
          const { upiPin, bankName } = formData.upiDetails;
          return upiPin && bankName;
        }
        if (formData.paymentMode === "Net Banking") {
          const { username, password } = formData.netBankingDetails;
          return username && password;
        }
        if (formData.paymentMode === "Other") {
          return formData.bankSelection; // At least select a bank
        }
        return false;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    } else {
      alert("Please fill out all required fields before proceeding.");
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    const dbRef = ref(database, "queries-complaints/");
    push(dbRef, formData)
      .then(() => navigate("/success"))
      .catch((error) => console.error("Error saving data:", error));
  };

  return (
    <div className="container my-4">
      <h3>Step {step} of 4</h3>
      <div className="form-content">
        {step === 1 && <Step1 formData={formData} updateFormData={updateFormData} />}
        {step === 2 && <Step2 formData={formData} updateFormData={updateFormData} />}
        {step === 3 && <Step3 formData={formData} updateFormData={updateFormData} />}
        {step === 4 && <Step4 formData={formData} updateFormData={updateFormData} />}
      </div>
      <div className="d-flex justify-content-between mt-4">
        {step > 1 && <Button onClick={handleBack}>Back</Button>}
        {step < 4 && <Button onClick={handleNext}>Next</Button>}
        {step === 4 && <Button onClick={handleSubmit}>Submit</Button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
