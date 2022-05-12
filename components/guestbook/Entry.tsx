import { formatDate } from "../../lib/date";

export default function Entry({ name, message, createdAt }): JSX.Element {
  return (
    <div>
      <p className="text-sm">
        <span>{name}</span> on{" "}
        <span className="text-gray-800">{formatDate(createdAt)}</span>
      </p>
      <pre>{message}</pre>
    </div>
  );
}
