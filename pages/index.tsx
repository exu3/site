import HeadObject from "../components/head";
import Nav from "../components/nav";
import Link from "next/link";
import Footer from "../components/footer";

const links = [
  { label: "github", href: "https://github.com/eilla1" },
  { label: "linkedin", href: "https://linkedin.com/in/ellla-x" },
  { label: "devpost", href: "https://devpost.com/eilla1" },
  { label: "polywork", href: "https://timeline.ella.cx" },
];

export default function Home(): JSX.Element {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main className="px-8 md:px-24 lg:px-48 xl:px-72">
        <h1 className="md:text-8xl text-5xl font-playfair font-extrabold underline pb-4 md:pb-8 lowercase sm:leading-loose">
          Hey, I&apos;m Ella.
        </h1>
        <section>
          <p className="font-mono text-lg">
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
          <ul className="font-mono text-lg list-disc list-inside">
            <li>
              open source at <a href="https://open.fiveable.me">Fiveable</a>
            </li>
            <li>
              learning <a href="https://yeeet.tech">Next.js</a>
            </li>
            <li>
              making awesome <a href="https://awards.hackclub.com">websites</a>
            </li>
            <li>
              organizing <a href="https://neohacks.org">hackathons</a>
            </li>
            <li>
              hanging out in <a href="https://hackclub.com/slack">Hack Club</a>
            </li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="font-sans font-bold text-2xl lowercase leading-loose">
            find me on the internet:
          </h2>
          <ul className="font-mono text-lg list-disc list-inside">
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
      </main>
      <div className="px-8 md:px-24 lg:px-48 p-8">
        <Footer />
      </div>
    </div>
  );
}
