import NextLink from "next/link";

export default function Footer({
  flavorText = "Made with the entrails of a Wahoo Fish.",
}): JSX.Element {
  return (
    <div>
      <p>{flavorText}</p>
      <p>
        <NextLink href="https://github.com/exu3/site" passHref>
          <a className="link" target="_blank" rel="noreferrer noopener">
            This website is open source.
          </a>
        </NextLink>
      </p>
    </div>
  );
}
