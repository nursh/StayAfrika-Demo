import Option from "@app/components/Option";
import Heading from "../components/Heading";


const options = [
  { text: 'Arts & design', iconUrl: '' }
]
export default function Moment() {

  return <>
    <Heading>What moment will you offer your guests?</Heading>
    {options.map(({ text, iconUrl}) => <Option key={text} text={text} iconUrl={iconUrl} />)}
  </>
}