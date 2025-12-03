type ButtonProps = {
  primary?: boolean;
  children: React.ReactNode;
}

export default function Button({ primary, children }: ButtonProps) {

  return <button className={primary ? 'primary' : undefined}>{children}</button>
}