import Heading from "@app/components/Heading";

export default function Moment41() {

  return (
    <>
      <Heading>Where should the guests meet you?</Heading>

      <div className="form-group">
        <input
          type="text"
          placeholder="Enter an address"
          id="address"
          className="input-icon"
        />
      </div>
    </>
  );
}
