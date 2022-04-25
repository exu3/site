import NextLink from "next/link";

export default function Footer(): JSX.Element {
  return (
    <div>
      <p>Made with the entrails of a Wahoo Fish</p>
      <p>
        <NextLink href="https://github.com/exu3/site" passHref>
          <a className="hover:text-gray-400 hover:underline">open source</a>
        </NextLink>
      </p>
    </div>
  );
}
