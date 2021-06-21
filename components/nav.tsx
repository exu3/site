import Link from "next/link";

const links = [
  { name: "home", destination: "/" },
  { name: "projects", destination: "/projects" },
  { name: "standing invitation", destination: "/invitation" },
];

export default function Nav(): JSX.Element {
  return (
    <div className="flex flex-row space-x-4">
      {links.map(({ name, destination }) => (
        <Link key={name} href={destination}>
          <a className="font-sans underline hover:text-gray-400 pb-3">{name}</a>
        </Link>
      ))}
    </div>
  );
}
