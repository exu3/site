import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const HomePage = () => {
  const time = new Date();
  const greeting = time.getHours() < 12 ? "Good morning ☀️" : "Good day 👋";

  const [hello, setHello] = useState("Hello.");
  const hellos = ["Hello.", "Bonjour.", "Hola.", "Hallo.", "你好。"];
  return (
    <>
      <Layout heading={greeting}>
        <article>
          <p className="pb-1">
            <span
              onClick={() =>
                setHello(hellos[Math.floor(Math.random() * hellos.length)])
              }
              className="cursor-pointer"
            >
              {hello}
            </span>{" "}
            My name is Ella. Welcome to my humble internet home. There
            isn&apos;t much to do here.
          </p>
          {/* <p className="pb-3">
            Perhaps you may want to{" "}
            <Link href="/book" passHref>
              <a className="link">read the guestbook</a>
            </Link>
            ?
          </p> */}
          <div className="flex justify-start">
            <Image
              src="/images/camelshump.JPG"
              alt="Cat gazing down"
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsXf6+HgAGkAKk6/w0SAAAAABJRU5ErkJggg=="
              height={2000}
              width={3500}
            />
          </div>

          <p className="pt-1 italic">Vermont, yeah.</p>
        </article>
      </Layout>
    </>
  );
};

export default HomePage;
