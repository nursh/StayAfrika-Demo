import Option from "@app/components/Option";
import Heading from "../components/Heading";

import Palette from '@app/assets/lucide/palette.svg'
import HeartPulse from '@app/assets/lucide/heart-pulse.svg'
import Utensils from '@app/assets/lucide/utensils.svg'
import TreePine from '@app/assets/lucide/tree-pine.svg'
import Landmark from '@app/assets/lucide/landmark.svg'


const options = [
  { text: 'Arts & design', iconUrl: Palette },
  { text: 'Fitness & Wellness', iconUrl: HeartPulse },
  { text: 'Food & Drink', iconUrl: Utensils },
  { text: 'History & Culture', iconUrl: Landmark},
  { text: 'Nature & Outdoors', iconUrl: TreePine }
]
export default function Moment() {

  return <>
    <Heading>What moment will you offer your guests?</Heading>
    <div className="options">
      {options.map(({ text, iconUrl}) => <Option key={text} text={text} iconUrl={iconUrl} />)}
    </div>
  </>
}