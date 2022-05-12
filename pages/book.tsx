import Layout from "../components/Layout";
import prisma from "../lib/prisma";
import Entry from "../components/guestbook/Entry";
import Link from "next/link";

const GuestBook = ({ records }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addRecord = async (e: any) => {
    e.preventDefault();

    await fetch("/api/guestbook/new", {
      body: JSON.stringify({
        name: e.target.name.value,
        message: e.target.message.value,
        email: e.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <Layout heading="Guestbook">
      <div>
        <p>You find yourself in the library.</p>
        <p>You see a guestbook.</p>
        <p>
          You can <Link href="/guestbook/new">write a new entry</Link> or{" "}
          <Link href="/guestbook">read the existing entries</Link>.
        </p>
      </div>

      <div className="mx-auto card max-w-min">
        <form onSubmit={addRecord} className="flex flex-col space-y-3 w-96">
          <label htmlFor="name">Name</label>
          <input className="input" type="text" name="name" required />
          {/* <label htmlFor="email">Email</label>
          <input className="input" type="email" name="email" /> */}
          <label htmlFor="message">Message</label>
          <textarea className="input" name="message" required />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <div>
        {records.map((r) => (
          <Entry
            key={r.id}
            name={r.name}
            message={r.message}
            createdAt={r.createdAt}
          />
        ))}
      </div>
    </Layout>
  );
};

export default GuestBook;

export async function getStaticProps() {
  const data = await prisma.guestbook.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const records = data.map((record) => ({
    id: record.id,
    name: record.name,
    message: record.message,
    createdAt: record.createdAt.toISOString(),
  }));

  return { props: { records }, revalidate: 1 };
}
