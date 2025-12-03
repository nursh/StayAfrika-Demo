import Option from "@app/components/Option";
import Heading from "../components/Heading";

import Palette from "@app/assets/lucide/palette.svg";
import HeartPulse from "@app/assets/lucide/heart-pulse.svg";
import Utensils from "@app/assets/lucide/utensils.svg";
import TreePine from "@app/assets/lucide/tree-pine.svg";
import Landmark from "@app/assets/lucide/landmark.svg";
import { useState } from "react";


const options = [
  { text: "Arts & design", iconUrl: Palette },
  { text: "Fitness & Wellness", iconUrl: HeartPulse },
  { text: "Food & Drink", iconUrl: Utensils },
  { text: "History & Culture", iconUrl: Landmark },
  { text: "Nature & Outdoors", iconUrl: TreePine },
];

export default function Moment() {

  const selectedOption = localStorage.getItem('moment-option');

  const [selected, setSelected] = useState(selectedOption || '');
  const onSelect = (option: string) => {
    setSelected(option);
    localStorage.setItem('moment-option', option);
  }

  return (
    <div>
      <Heading>What moment will you offer your guests?</Heading>
      <div className="options">
        {options.map(({ text, iconUrl }) => (
          <Option key={text} text={text} iconUrl={iconUrl} selected={selected} setSelected={onSelect} />
        ))}
      </div>
    </div>
  );
}
