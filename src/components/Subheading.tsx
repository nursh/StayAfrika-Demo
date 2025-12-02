type HeadingProps = {
  children: React.ReactNode;
}

export default function Subheading({ children }: HeadingProps) {
  return <h3 className="subheading">{children}</h3>
}