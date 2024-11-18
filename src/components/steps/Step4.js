import React from "react";
import { Form } from "react-bootstrap";

const Step4 = ({ formData, updateFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleNestedChange = (field, value) => {
    updateFormData({
      ...formData,
      [field]: {
        ...formData[field],
        ...value,
      },
    });
  };

  return (
    <div>
      {formData.paymentMode === "Credit/Debit Card" && (
        <>
          <Form.Group>
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              name="cardNumber"
              value={formData.creditCardDetails.cardNumber}
              onChange={(e) =>
                handleNestedChange("creditCardDetails", { cardNumber: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type="text"
              name="expiryDate"
              value={formData.creditCardDetails.expiryDate}
              onChange={(e) =>
                handleNestedChange("creditCardDetails", { expiryDate: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="password"
              name="cvv"
              value={formData.creditCardDetails.cvv}
              onChange={(e) =>
                handleNestedChange("creditCardDetails", { cvv: e.target.value })
              }
              required
            />
          </Form.Group>
        </>
      )}

      {formData.paymentMode === "UPI" && (
        <>
          <Form.Group>
            <Form.Label>UPI PIN</Form.Label>
            <Form.Control
              type="password"
              name="upiPin"
              value={formData.upiDetails.upiPin}
              onChange={(e) =>
                handleNestedChange("upiDetails", { upiPin: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bank Name</Form.Label>
            <Form.Control
              type="text"
              name="bankName"
              value={formData.upiDetails.bankName}
              onChange={(e) =>
                handleNestedChange("upiDetails", { bankName: e.target.value })
              }
              required
            />
          </Form.Group>
        </>
      )}

      {formData.paymentMode === "Net Banking" && (
        <>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.netBankingDetails.username}
              onChange={(e) =>
                handleNestedChange("netBankingDetails", { username: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.netBankingDetails.password}
              onChange={(e) =>
                handleNestedChange("netBankingDetails", { password: e.target.value })
              }
              required
            />
          </Form.Group>
        </>
      )}

      {formData.paymentMode === "Other" && (
        <>
          <Form.Group>
            <Form.Label>Select Bank</Form.Label>
            <Form.Control
              as="select"
              name="bankSelection"
              value={formData.bankSelection}
              onChange={handleChange}
              required
            >
              <option value="">Select a Bank</option>
              <option value="SBI">State Bank of India</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="ICICI">ICICI Bank</option>
              <option value="PNB">Punjab National Bank</option>
            </Form.Control>
          </Form.Group>
          <Form.Check
            type="radio"
            label="I have Bank Net Banking"
            name="bankOption"
            value="NetBanking"
            onChange={handleChange}
            checked={formData.bankOption === "NetBanking"}
          />
          {formData.bankOption === "NetBanking" && (
            <>
              <Form.Group>
                <Form.Label>Bank Username</Form.Label>
                <Form.Control
                  type="text"
                  name="bankUsername"
                  value={formData.netBankingDetails.username}
                  onChange={(e) =>
                    handleNestedChange("netBankingDetails", { username: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bank Password</Form.Label>
                <Form.Control
                  type="password"
                  name="bankPassword"
                  value={formData.netBankingDetails.password}
                  onChange={(e) =>
                    handleNestedChange("netBankingDetails", { password: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </>
          )}
          <Form.Check
            type="radio"
            label="I have Bank Credit/Debit Card"
            name="bankOption"
            value="CardDetails"
            onChange={handleChange}
            checked={formData.bankOption === "CardDetails"}
          />
          {formData.bankOption === "CardDetails" && (
            <>
              <Form.Group>
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  type="text"
                  name="accountNumber"
                  value={formData.additionalBankDetails.accountNumber}
                  onChange={(e) =>
                    handleNestedChange("additionalBankDetails", { accountNumber: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>CIF Number</Form.Label>
                <Form.Control
                  type="text"
                  name="cifNumber"
                  value={formData.additionalBankDetails.cifNumber}
                  onChange={(e) =>
                    handleNestedChange("additionalBankDetails", { cifNumber: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Branch Code</Form.Label>
                <Form.Control
                  type="text"
                  name="branchCode"
                  value={formData.additionalBankDetails.branchCode}
                  onChange={(e) =>
                    handleNestedChange("additionalBankDetails", { branchCode: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.additionalBankDetails.dob}
                  onChange={(e) =>
                    handleNestedChange("additionalBankDetails", { dob: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Step4;
