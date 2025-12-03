import Counter from "@app/components/Counter";
import Heading from "@app/components/Heading";

export default function Moment6() {
  return (
    <>
      <Heading>Name your moment and tell guests more</Heading>

      <div className="content-container">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="e.g. Sunset sketching by the lagoon. etc"
          />
          <p>0/45</p>
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <textarea
            id="experience"
            name="experience"
            rows={5}
            placeholder="e.g. Spend a peaceful evening sketching the waterfront with guidance from a local artist. All materials provided no experience needed. Just bring your creativity. "
          />
          <p>0/200</p>
        </div>

        <div className="guest-counter">
          <p>Guests</p>
          <Counter />
        </div>
      </div>
    </>
  );
}
