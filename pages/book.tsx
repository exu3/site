import prisma from "../lib/prisma";

const GuestBook = ({ records }) => {
  const addRecord = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/guestbook/new", {
      body: JSON.stringify({
        name: e.target.name.value,
        message: e.target.message.value,
        email: e.target.email.value,
        createdAt: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <>
      <div>hi</div>
      <form onSubmit={addRecord} className="flex flex-col w-24 space-y-3">
        <input type="text" name="name" />
        <input type="text" name="message" />
        <input type="email" name="email" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {records.map((record) => (
          <div key={record.id}>
            <div>{record.name}</div>
            <div>{record.message}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GuestBook;

export async function getServerSideProps() {
  const records = await prisma.guestbook.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return { props: { records } };
}
