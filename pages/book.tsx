import Layout from "../components/Layout";
import prisma from "../lib/prisma";

const GuestBook = ({ records }) => {
  const addRecord = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/guestbook/new", {
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
      <div>hi</div>
      <form onSubmit={addRecord} className="flex flex-col w-24 space-y-3">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="message">Message</label>
        <input type="text" name="message" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div>
        {records.map((record) => (
          <div key={record.id}>
            <div>{record.name}</div>
            <div>{record.message}</div>
            <div>{record.createdAt}</div>
          </div>
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
