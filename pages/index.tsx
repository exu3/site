import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import cat from "../public/images/cat.jpg";

const HomePage = () => {
  const time = new Date();
  const greeting = time.getHours() < 12 ? "Good morning ☀️" : "Good day 👋";

  return (
    <>
      <Layout heading={greeting} showNav={false}>
        <article>
          <p className="pb-1">
            Hello. My name is Ella. Welcome to my humble internet home. There
            isn&apos;t much to do here.
          </p>
          <p className="pb-3">
            Maybe you want to{" "}
            <Link href="/book" passHref>
              <a className="link">read the guestbook</a>
            </Link>
            ?
          </p>
          <p className="pb-2">Here is a cat:</p>
          <Image src={cat} alt="Cat gazing down" placeholder="blur" />
        </article>
      </Layout>
    </>
  );
};

export default HomePage;
