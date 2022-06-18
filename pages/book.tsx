import Layout from "../components/layout";
import prisma from "../lib/prisma";
import Entry from "../components/guestbook/Entry";
import Form from "../components/guestbook/Form";

const GuestBook = ({ records }) => {
  return (
    <Layout heading="Library">
      <div className="pb-3">
        <p className="italic">
          You find yourself in the <strong>Library</strong>.
        </p>
        <p className="italic">You see a guestbook.</p>
        <br />
        <p>Perhaps you&apos;d like to add a new entry?</p>
      </div>

      <Form />

      <div className="h-10"></div>

      <div className="space-y-3">
        {records
          .filter((r) => r.message)
          .map((r) => (
            <Entry
              key={r.id}
              name={r.name}
              message={r.message}
              createdAt={r.createdAt}
            />
          ))}
      </div>
      <div className="h-4"></div>
    </Layout>
  );
};

export default GuestBook;

export async function getServerSideProps() {
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

  return { props: { records } };
}
