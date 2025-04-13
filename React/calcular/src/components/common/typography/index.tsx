interface TypographyProps {
  title: string;
}

function Typography({ title }: TypographyProps) {
  return <h1 style={{ color: "#494D4B"}}>{title}</h1>;
}

export default Typography;
