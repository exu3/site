import Layout from "../components/layout";
import Link from "next/link";

type Props = {
  heading: string;
  children: string;
  link: string;
  github?: string;
};

export default function Projects(): JSX.Element {
  return (
    <div>
      <Layout heading="projects">
        <section>
          <p>
            This is a list of projects that I&apos;ve worked on recently (not a
            comprehensive list). This includes a lot of web projects mostly
            working with modern frameworks like Next.js and Tailwind CSS.
          </p>
        </section>
        <section>
          <div className="flex flex-col md:grid md:grid-cols-2 items-start">
            <Project
              heading="Hydrangea Hacks"
              link="https://hydrangeahacks.tech"
              github="https://github.com/eilla1/HydrangeaHacks-website"
            >
              A website built with Next.js and Tailwind for Hydrangea Hacks, the
              largest hackathon based in the Bay Area for people of marginalized
              genders, reaching around 1000 hackers.
            </Project>
            <Project
              heading="InnovatHer"
              link="https://innovather.vercel.app"
              github="https://github.com/eilla1/InnovatHer-website"
            >
              A website built originally built with Gatsby and rewritten in
              Next.js and Tailwind for InnovatHer, a month long event
              encouraging female and non-binary students to make amazing
              projects.
            </Project>
            <Project
              heading="open.fiveable.me"
              link="https://open.fiveable.me"
              github="https://github.com/ThinkFiveable/open"
            >
              Fiveable&apos;s open source initiative, a platform and community
              for students interested in coding/ OSS who aren&apos;t sure where
              to start.
            </Project>
            <Project
              heading="Hack Club Awwwards"
              link="https://design-awards.hackclub.com"
              github="https://github.com/hackclub/awards"
            >
              Website for a web design competition, a community-led initiative
              in Hack Club.
            </Project>
            <Project
              heading="yeet"
              link="https://yeeet.tech"
              github="https://github.com/eilla1/yeet"
            >
              Fun interactive website built with Next.js, Tailwind, and Framer
              Motion.
            </Project>
            <Project
              heading="slack-pfp"
              link="https://pfp.ella.cx"
              github="https://github.com/eilla1/slack-pfp"
            >
              Web application utlizing Next.js API routes and the Slack API to
              change my Slack profile picture to random cat pictures.
            </Project>
            <Project
              heading="NeoHacks"
              link="https://neohacks.org"
              github="https://github.com/eilla1/neohacks"
            >
              A website built with Next.js and Tailwind for NeoHacks, a virtual
              weekend hackathon.
            </Project>
            <Project heading="Hack+" link="https://hackplus.io">
              The main Hack+ website built with Next.js and MDX with Tailwind
              CSS for styling.
            </Project>
          </div>
        </section>
        <section>
          <h2 className="mt-8 text-2xl font-sans font-bold">
            inactive projects
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-2 items-start">
            <Project
              heading="arkanoid"
              link="https://arkan0id.vercel.app"
              github="https://github.com/eilla1/arkanoid"
            >
              A clone of the classic arkanoid game built with Typescript.
            </Project>
            <Project
              heading="vue-pokedex"
              link="https://arkan0id.vercel.app"
              github="https://github.com/eilla1/vue-pokeapi"
            >
              A web application built with the Pokemon API utilizing Vue 3&apos;
              composition API.
            </Project>
          </div>
        </section>
      </Layout>
    </div>
  );
}

function Project({ heading, children, link, github }: Props) {
  return (
    <div className="my-5 mr-8 flex items-center">
      <p>
        <Link href={link}>
          <a
            className="font-sans font-bold text-lg hover:text-gray-400 underline"
            target="_blank"
            rel="noreferrer"
          >
            {heading}
          </a>
        </Link>
        <span className="pl-2">{children}</span>
        {github ? (
          <span className="mx-1 rounded-lg px-1 bg-gray-200 dark:bg-gray-300 hover:bg-gray-300 dark:hover:bg-gray-400 dark:text-black">
            <a href={github} target="_blank" rel="noreferrer">
              open-source
            </a>
          </span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
