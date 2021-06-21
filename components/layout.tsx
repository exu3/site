import Footer from "./footer";
import HeadObject from "./head";
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
      <HeadObject />
      <ThemeToggle />
      <main className="px-8 md:px-24 lg:px-48 xl:px-72">
        <Nav />
        <h1 className="text-5xl font-extrabold leading-loose font-playfair underline">
          {heading}
        </h1>
        <div className="min-h-screen">{children}</div>
      </main>
      <div className="px-8 md:px-24 lg:px-48 pb-8">
        <Footer />
      </div>
    </div>
  );
}
