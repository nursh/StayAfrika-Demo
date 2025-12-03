import "@app/styles/Option.css";

type OptionProps = {
  text: string;
  iconUrl: string;
  selected: string;
  setSelected: (opt: string) => void;
};

export default function Option({
  text,
  iconUrl,
  selected,
  setSelected
}: OptionProps) {
  return (
    <div
      className={ selected === text ? 'selected option' : "option"}
      onClick={() => setSelected(text)}
    >
      <img src={iconUrl} />
      {text}
    </div>
  );
}
