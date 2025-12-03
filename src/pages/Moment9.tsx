import Heading from "@app/components/Heading";
import RadioButton from "@app/components/RadioButton";
import { useState } from "react";

const transport = {
  name: "transport",
  options: [
    { id: "tyes", value: "yes", label: "Yes" },
    { id: "tno", value: "no", label: "No" },
  ],
};

const transportTypes = {
  name: "transportTypes",
  options: [
    { id: "Car", value: "Car", label: "Car" },
    { id: "Bus", value: "Bus", label: "Bus" },
    { id: "Plane", value: "Plane", label: "Plane" },
    { id: "Bike", value: "Bike", label: "Bike" },
    { id: "Keke", value: "Keke", label: "Keke" },
    { id: "Boat", value: "Boat", label: "Boat" },
  ],
};

const join = {
  name: "join",
  options: [
    { id: "jyes", value: "yes", label: "Yes" },
    { id: "jno", value: "no", label: "No" },
  ],
};

export default function Moment9() {
  const [offerTransport, setOfferTransport] = useState("");

  return (
    <>
      <Heading>How should your guest prepare?</Heading>
      <div className="content-container">
        <div className="radio-group">
          <p className="semibold">Will you offer transportation?</p>
          <div className="radio-buttons">
            {transport.options.map(({ id, value, label }) => (
              <div className="radio-button">
                <input
                  type="radio"
                  id={id}
                  name={transport.name}
                  value={value}
                  defaultValue={offerTransport}
                  onChange={() => setOfferTransport(value)}
                />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>

        {offerTransport === 'yes' && (
          <div className="col">
            <p className="semibold">How? (Select all that apply)</p>
            <div className="checkbox-group no-border">
              {transportTypes.options.map(({ id, value, label }) => (
                <div>
                  <input type="checkbox" id={id} name={transportTypes.name} value={value} />
                  <label htmlFor={id}>{label}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="radio-group">
          <p className="semibold">Will guests need to pay to join?</p>
          <div className="radio-buttons">
            {join.options.map(({ id, value, label }) => (
              <RadioButton
                id={id}
                value={value}
                label={label}
                key={id}
                name={join.name}
              />
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="paymentlink">Payment Link</label>
          <input
            type="text"
            placeholder="Enter the URL where guests can make payment to you"
            id="paymentlink"
            name="paymentlink"
          />
        </div>

        <div className="form-group">
          <label htmlFor="requiredItems">Required Items</label>
          <textarea
            name="requiredItems"
            id="requiredItems"
            rows={4}
            placeholder="Let guests know if they should come with any item (e.g, hat, flashlight, snacks)"
          />
          <p>0/200</p>
        </div>
      </div>
    </>
  );
}
