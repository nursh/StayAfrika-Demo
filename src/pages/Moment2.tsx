import Counter from "@app/components/Counter";
import Heading from "@app/components/Heading";

export default function Moment2() {

  return (
    <>
      <Heading>How many years have you worked in arts & design?</Heading>
      <div className="margin-bs">
        <Counter
          textClass="txt-xlarge semibold"
        />
      </div>
    </>
  );
}
