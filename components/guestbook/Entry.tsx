import { formatDate } from "../../lib/date";

export default function Entry({ name, message, createdAt }): JSX.Element {
  return (
    <div>
      <p>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <span>{name}</span> //{" "}
        <span className="text-gray-800">{formatDate(createdAt)}</span>
      </p>
      <p>{message}</p>
    </div>
  );
}
