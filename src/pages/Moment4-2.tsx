import Heading from "@app/components/Heading";

export default function Moment42() {
  return (
    <>
      <Heading>Confirm the location</Heading>

      <div className="address-container">
        <div className="form-group">
          <label htmlFor="country">Country / Region</label>
          <input
            type="text"
            readOnly
            value="Nigeria"
            id="country"
            name="country"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Street Address</label>
          <input
            type="text"
            placeholder="e.g, 123 main street"
            id="address"
            name="address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="apartment">Apartment / Floor</label>
          <input
            type="text"
            placeholder="e.g, C34"
            id="apartment"
            name="apartment"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City / Town / Village</label>
          <input type="text" placeholder="e.g, Bwari" id="city" name="city" />
        </div>

        <div className="form-group">
          <label htmlFor="state">State / Province / Territory</label>
          <input
            type="text"
            placeholder="e.g, Federal Capital Territory"
            id="state"
            name="state"
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalcode">Postal Code</label>
          <input
            type="text"
            placeholder="e.g, 12345"
            id="postalcode"
            name="postalcode"
          />
        </div>

        <div className="form-group">
          <label htmlFor="direction">Direction Notes</label>
          <textarea
            name="direction"
            id="direction"
            rows={4}
            placeholder="Describe landmarks or places nearby that can help you guests find your location"
          />
        </div>
      </div>
    </>
  );
}
