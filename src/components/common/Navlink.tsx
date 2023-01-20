interface Props {
  href: string;
  index: number;
  name: string;
}

function Navlink({ href, name, index }: Props): JSX.Element {
  return (
    <a className="ml-12" href={href}>
      <span className="text-tertiary-500">0{index}. </span>
      <span className="text-secondary">{name}</span>
    </a>
  );
}

export default Navlink;
