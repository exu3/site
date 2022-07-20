import { useState } from "react";

export const GuestbookNew = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
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
    // refresh page so the entry shows up
    window.location.reload();
  };
  return (
    <>
      <div className="max-w-min">
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
        {error && (
          <div className="px-2 mt-2 text-white bg-red-300 bg-opacity-50 rounded-lg">
            {error}
          </div>
        )}
        {success && (
          <div className="px-2 mt-2 text-white bg-green-300 bg-opacity-50 rounded-lg">
            {success}
          </div>
        )}
      </div>
    </>
  );
};

export default GuestbookNew;
