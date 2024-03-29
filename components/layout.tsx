import Footer from "./footer";
import Meta from "./meta";
import Nav from "./nav";
import ThemeToggle from "./theme";

interface LayoutProps {
  children: React.ReactNode;
  heading: string;
}

export default function Layout({
  heading,
  children,
}: LayoutProps): JSX.Element {
  return (
    <div>
      <Meta />
      <ThemeToggle />
      <main className="min-h-screen px-8 md:px-24 lg:px-48 xl:px-72">
        <Nav />
        <h1 className="font-sans text-5xl font-extrabold leading-loose">
          {heading}
        </h1>
        <div>{children}</div>
      </main>
      <div className="px-8 pb-8 md:px-24 lg:px-48 xl:px-72">
        <Footer />
      </div>
    </div>
  );
}
