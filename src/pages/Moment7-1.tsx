import Heading from "@app/components/Heading";
import Subheading from "@app/components/Subheading";
import MomentPhoto from "@app/assets/moment-1.svg";
import MomentPhoto2 from "@app/assets/moment-2.svg";
import Plus from '@app/assets/lucide/plus.svg';

import "@app/styles/Moment.css";

const moments = [
  {
    imageUrl: MomentPhoto,
    title: "Welcome & Guided Stretch",
    duration: "20 mins",
    description: "We'll begin with a gentle stretch session to relax the b...",
  },
  {
    imageUrl: MomentPhoto2,
    title: "Painting with Local Pigments",
    duration: "60 mins",
    description: "Learn how to mix and paint with natural, locally sourced...",
  },
];

export default function Moment71() {
  return (
    <>
      <Heading>Map out your moment</Heading>
      <Subheading>
        Add activities to set expectations and get guests excited
      </Subheading>

      <div className="content-container">
        {moments.map(({ imageUrl, title, duration, description}) => (

          <div className="moment">
            <img src={imageUrl} alt="moment photo 1" />
            <div>
              <p className="txt-semibold">
                {title}{" "}
                <span className="moment-duration">&bull; {duration}</span>{" "}
              </p>
              <p className="txt-normal">{description}</p>
            </div>
          </div>
          ))
        }

        <div className="moment">
          <img src={Plus} alt="Add a moment icon" />
          <p>Add an activity</p>
        </div>
      </div>
    </>
  );
}
