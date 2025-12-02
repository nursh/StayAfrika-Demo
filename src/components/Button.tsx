import '../Button.css';

type ButtonProps = {
  primary?: boolean;
  text: string;
}

export default function Button({ primary, text }: ButtonProps) {

  return <button className={primary ? 'primary' : undefined}>{text}</button>
}