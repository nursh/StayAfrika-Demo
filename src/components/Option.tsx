type OptionProps = {
  text: string;
  iconUrl: string;
}

export default function Option({ text, iconUrl }: OptionProps) {

  return (
    <div>
      <img src={iconUrl} />
      {text}
    </div>
  )
}