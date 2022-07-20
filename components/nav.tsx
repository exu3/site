import Link from "next/link";

const links = [
  { name: "home", destination: "/" },
  { name: "guestbook", destination: "/book" },
];

export default function Nav(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-end space-x-4">
      {links.map(({ name, destination }) => (
        <Link key={name} href={destination}>
          <a className="flex items-center justify-center px-3 py-2 font-sans rounded-lg hover:bg-gray-200 dark:hover:bg-opacity-20">
            {name}
          </a>
        </Link>
      ))}
    </div>
  );
}
