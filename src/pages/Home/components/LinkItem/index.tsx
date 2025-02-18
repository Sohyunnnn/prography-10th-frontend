interface LinkItemProps {
  href: string;
  label: string;
}
const LinkItem = ({ href, label }: LinkItemProps) => (
  <a
    className="body1 hover:underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);
export default LinkItem;
