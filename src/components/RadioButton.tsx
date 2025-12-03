
type RadioProps = {
  id: string;
  name: string;
  label: string;
  value: string
}

export default function RadioButton({ id, name, label, value }: RadioProps) {

  return (
    <div className="radio-button">
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}