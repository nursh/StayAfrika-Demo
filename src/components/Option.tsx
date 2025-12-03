import "@app/styles/Option.css";

type OptionProps = {
  text: string;
  iconUrl: string;
};

export default function Option({
  text,
  iconUrl,
}: OptionProps) {
  return (
    <div
      className="option"
    >
      <img src={iconUrl} />
      {text}
    </div>
  );
}
