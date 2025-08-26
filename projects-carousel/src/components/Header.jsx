const DEFAULT_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({
  brand = 'Projects Gallery,',
  links = DEFAULT_LINKS,
}) {
  return (
    <header>
      <nav>
        <a href="#">{brand}</a>
        <ul>
          {links.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
