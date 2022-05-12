import Layout from "../../components/Layout";
import Link from "next/link";
import { useState } from "react";

export const GuestbookNew = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addRecord = async () => {
    setIsLoading(true);
    setError("");
    setSuccess("");
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
    const res = await fetch("/api/guestbook/new", {
      body: JSON.stringify({
        name,
        message,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const data = await res.json();
    if (data.error) {
      setError(data.error);
      setIsLoading(false);
    } else {
      setSuccess("Entry added successfully");
      setIsLoading(false);
      setName("");
      setMessage("");
      setEmail("");
    }
  };
  return (
    <Layout heading="Write a message">
      <div>
        <p>
          Lost? Return to the <Link href="/library">Library</Link>
        </p>
      </div>
      <div className="mx-auto card max-w-min">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-96">
          <label htmlFor="name">Name</label>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {/* <label htmlFor="email">Email</label>
                    <input className="input" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
          <label htmlFor="message">Message</label>
          <textarea
            className="input"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </div>

      <div>{success && <p className="text-7xl">📖</p>}</div>
    </Layout>
  );
};
export default GuestbookNew;
