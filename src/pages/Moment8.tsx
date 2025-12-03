import Heading from "@app/components/Heading";
import Plus from "@app/assets/lucide/plus.svg";
import Edit from "@app/assets/lucide/pen.svg";
import { useRef } from "react";
import Close from "@app/assets/lucide/x.svg";
import Button from "@app/components/Button";

export default function Moment8() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <Heading>When is this moment happening?</Heading>
      <div className="content-container">
        <div className="hours-container">
          <p className="txt-semibold">Available hours</p>

          <div className="hours">
            <div>
              <p className="txt-semibold">Sunday, Thursday</p>
              <p className="txt-normal">8:00 AM - 5:00 PM</p>
            </div>
            <img
              src={Edit}
              alt="Edit icon"
              onClick={openDialog}
              aria-labelledby="open"
            />
          </div>

          <div className="moment">
            <img src={Plus} alt="Add a moment icon" />
            <p>Select days and time</p>
          </div>
        </div>
      </div>

      <dialog ref={dialogRef}>
        <img
          src={Close}
          alt="Close dialog button"
          className="close"
          onClick={closeDialog}
          aria-labelledby="close"
        />
        <h3>Available hours</h3>

        <div className="checkbox-container">
          <p className="semibold">Days</p>
          <div className="checkbox-group">
            <div>
              <input type="checkbox" name="days" id="Sunday" value="Sunday" />
              <label htmlFor="Sunday" className="txt-normal">
                Sunday
              </label>
            </div>
            <div>
              <input type="checkbox" name="days" id="Monday" value="Monday" />
              <label htmlFor="Monday" className="txt-normal">
                Monday
              </label>
            </div>
            <div>
              <input type="checkbox" name="days" id="Tuesday" value="Tuesday" />
              <label htmlFor="Tuesday" className="txt-normal">
                Tuesday
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="days"
                id="Wednesday"
                value="Wednesday"
              />
              <label htmlFor="Wednesday" className="txt-normal">
                Wednesday
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="days"
                id="Thursday"
                value="Thursday"
              />
              <label htmlFor="Thursday" className="txt-normal">
                Thursday
              </label>
            </div>
            <div>
              <input type="checkbox" name="days" id="Friday" value="Friday" />
              <label htmlFor="Friday" className="txt-normal">
                Friday
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="days"
                id="Saturday"
                value="Saturday"
              />
              <label htmlFor="Saturday" className="txt-normal">
                Saturday
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="from-time">From</label>
          <select name="from-time" id="from-time">
            <option value="">9:00 AM</option>
            <option value="">10:00 AM</option>
            <option value="">11:00 AM</option>
            <option value="">12:00 PM</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="to-time">To</label>
          <select name="to-time" id="to-time">
            <option value="">1:00 PM</option>
            <option value="">2:00 PM</option>
            <option value="">3:00 PM</option>
            <option value="">4:00 PM</option>
          </select>
        </div>

        <Button primary>Save</Button>
        <a href="" className="center">
          Clear Selections
        </a>
      </dialog>
    </>
  );
}
