import Heading from "@app/components/Heading";
import Subheading from "@app/components/Subheading";

export default function Moment3() {
  return (
    <>
      <Heading>Tell us about your experience or training</Heading>
      <Subheading>
        Help guests feel confident by sharing you background and qualifications
      </Subheading>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="e.g. ballroom dancer, fashion stylist. etc"
        />
        <p>0/45</p>
      </div>

      <div className="form-group">
        <label htmlFor="experience">Experience</label>
        <textarea
          id="experience"
          name="experience"
          rows={4}
          
          placeholder="e.g. I am practising visual art with over 8 years of experience in mixed media and have hosted several community art workshops"
        />
        <p>0/200</p>
      </div>

      <div className="form-group">
        <label htmlFor="highlights">Career Highlights</label>
        <textarea
          id="highlights"
          name="highlights"
          rows={3}
          placeholder="e.g. My work was recently featured in a group exhibition at the National Gallery in Abuja"
        />
        <p>0/200</p>
      </div>
    </>
  );
}
