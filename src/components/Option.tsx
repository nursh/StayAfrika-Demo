import "@app/styles/Option.css";

type OptionProps = {
  text: string;
  iconUrl: string;
  selected: string;
  setSelected: (text: string) => void;
};

export default function Option({
  text,
  iconUrl,
  selected,
  setSelected,
}: OptionProps) {
  return (
    <div
      className={text === selected ? `selected option` : `option`}
      onClick={() => setSelected(text)}
    >
      <img src={iconUrl} />
      {text}
    </div>
  );
}
