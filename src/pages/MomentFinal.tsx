import Heading from "@app/components/Heading";
import Subheading from "@app/components/Subheading";
import ChevronDown from "@app/assets/lucide/chevron-down.svg";
import "@app/styles/Price.css";

export default function MomentFinal() {
  return (
    <>
      <Heading>Price Per Guest</Heading>
      <Subheading>Set a price for up to 5 guests</Subheading>

      <div className="content-container">
        <div className="price">
          <span>&#8358;</span>
          <input type="number" name="price" id="price" placeholder="10,000" />
        </div>

        <div className="include-group">
          <input type="checkbox" name="include" id="include" />
          <label htmlFor="include" className="txt-normal">
            include taxes/fees in the price
          </label>
        </div>

        <div className="final-price">
          <p className="txt-large">You'll get:</p>
          <p className="txt-bold txt-large">
            &#8358; 9,302.00{" "}
            <span>
              <img src={ChevronDown} alt="Chevron down" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
