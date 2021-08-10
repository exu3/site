import Link from "next/link";
import Layout from "../components/layout";

const links = [
  { label: "github", href: "https://github.com/eilla1" },
//   { label: "linkedin", href: "https://linkedin.com/in/ellla-x" },
  { label: "devpost", href: "https://devpost.com/eilla1" },
  { label: "polywork", href: "https://timeline.ella.cx" },
];

export default function Home(): JSX.Element {
  return (
    <div className="dark:text-white dark:bg-black">
      <Layout heading="hi, i'm ella.">
        <section>
          <p className="font-sans">
            I’m a high school student currently based in the Bay Area. I am
            currently exploring front-end web development and design, and I am
            always interested in learning new technologies. In my free time, I
            enjoy going outside and hanging out in nature.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="font-sans font-bold text-2xl lowercase leading-loose">
            what i’ve been up to recently:
          </h2>
          <ul className="font-sans list-disc list-inside">
            <li>open source at Fiveable</li>
            <li>learning how to make cool websites</li>
            <li>
              hanging out in{" "}
              <a
                href="https://hackclub.com/slack"
                className="hover:text-gray-400 hover:underline"
              >
                Hack Club
              </a>
            </li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="font-sans font-bold text-2xl lowercase leading-loose">
            find me on the internet:
          </h2>
          <ul className="font-sans list-disc list-inside">
            {links.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>
                  <a className={`hover:text-gray-400 hover:underline`}>
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </div>
  );
}
