import { formatDate } from "../../lib/date";

export default function Entry({ name, message, createdAt }): JSX.Element {
  return (
    <div>
      <p className="text-sm text-gray-500">
        <span>{name}</span> on <span>{formatDate(createdAt)}</span>
      </p>
      <pre>{message}</pre>
    </div>
  );
}
