import Layout from "../components/layout";
import Link from "next/link";

export default function Projects(): JSX.Element {
  return (
    <div>
      <Layout heading="projects">
        <section>
          <div className="flex flex-col md:flex-row md:flex-wrap">
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
            <Project heading="fiveable open" link="/">
              this this this
            </Project>
          </div>
        </section>
      </Layout>
    </div>
  );
}

function Project({ heading, children, link }) {
  return (
    <div className="my-5 mr-8">
      <h4 className="font-sans font-semibold text-green-400 text-lg underline">
        <Link href={link}>
          <a>{heading}</a>
        </Link>
      </h4>
      <p>{children}</p>
    </div>
  );
}
