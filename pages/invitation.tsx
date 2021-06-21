import Layout from "../components/layout";

export default function Invitation(): JSX.Element {
  return (
    <div>
      <Layout heading="standing invitation">
        <p>
          This is a standing invitation: if you are a person and want to talk,
          please reach out to me anytime at ella @ this domain or DM me on any
          social platforms.
        </p>
        <br />
        <p>
          I&apos;m open to talk about anything at all. Please don&apos;t
          hesitate to say hi; I&apos;d love to meet you!
        </p>
        <div>
          <img
            src="https://live.staticflickr.com/65535/50386601723_bef1915659_b.jpg"
            alt="cat"
            className="rounded-lg w-60 mx-auto mt-8"
          />
          <img
            src="https://workshops.hackclub.com/content/workshops/orpheus/img/confused_dinosaur.png"
            alt="cat"
            className="rounded-lg w-60 mx-auto my-8"
          />
        </div>
        <p className="text-center">Enjoy these random pictures :)</p>
      </Layout>
    </div>
  );
}
