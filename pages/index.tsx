import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import cat from "../public/images/cat.jpg";
import { useState } from "react";

const HomePage = () => {
  const time = new Date();
  const greeting = time.getHours() < 12 ? "Good morning ☀️" : "Good day 👋";

  const [hello, setHello] = useState("Hello.");
  const hellos = ["Hello.", "Bonjour.", "Hola.", "Hallo.", "你好。"];
  return (
    <>
      <Layout heading={greeting} showNav={false}>
        <article>
          <p className="pb-1">
            <span
              onClick={() =>
                setHello(hellos[Math.floor(Math.random() * hellos.length)])
              }
              className="animate-cursor-party"
            >
              {hello}
            </span>{" "}
            My name is Ella. Welcome to my humble internet home. There
            isn&apos;t much to do here.
          </p>
          <p className="pb-3">
            Perhaps you may want to{" "}
            <Link href="/book" passHref>
              <a className="link">read the guestbook</a>
            </Link>
            ?
          </p>
          <Image
            src={cat}
            alt="Cat gazing down"
            placeholder="blur"
            height={2000}
            objectFit="contain"
          />

          <p className="italic text-center">This is a cat.</p>
        </article>
      </Layout>
    </>
  );
};

export default HomePage;
