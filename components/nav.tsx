import Link from "next/link";

const links = [{ name: "home", destination: "/" }];

export default function Nav(): JSX.Element {
  return (
    <div className="flex flex-row space-x-4">
      {links.map(({ name, destination }) => (
        <Link key={name} href={destination}>
          <a className="pb-3 font-sans underline hover:text-gray-400">{name}</a>
        </Link>
      ))}
    </div>
  );
}
