import Heading from "@app/components/Heading";
import Subheading from "@app/components/Subheading";
import ChevronDown from "@app/assets/lucide/chevron-down.svg";
import Checkmark from '@app/assets/lucide/circle-check-big.svg';
import "@app/styles/Price.css";
import { useRef } from "react";
import Close from "@app/assets/lucide/x.svg";
import Button from "@app/components/Button";
import { Link } from "react-router";


export default function MomentFinal() {

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };


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
              <img src={ChevronDown} alt="Chevron down" onClick={openDialog}/>
            </span>
          </p>
        </div>
      </div>

      <dialog className="price-dialog" ref={dialogRef}>
        <img
          src={Close}
          alt="Close dialog button"
          className="close"
          onClick={closeDialog}
          aria-labelledby="close"
        />

        <img src={Checkmark} alt="check mark" className="check"/>
        <h4 className="txt-large">
          Listing submitted<br />
          successfully
        </h4>
        <p>Our team is now reviewing your details. You'll be notified once your listing is approved and ready to go live</p>
        <Button primary>Go to Dashboard</Button>
        <Link to="/" className="center">
          View your listing
        </Link>
      </dialog>
    </>
  );
}
