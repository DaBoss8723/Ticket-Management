import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] rounded-md shadow-lg p-4 m-2">
      <div className="flex justify-between items-center mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <DeleteBlock id={ticket._id} />
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4 className="mb-2">{ticket.title}</h4>
        <hr className="h-px border-0 bg-slate-500 mb-3" />

        <p className="text-sm mb-4 line-clamp-2">{ticket.description}</p>

        <p className="text-xs text-gray-400">
          {formatTimestamp(ticket.createdAt)}
        </p>

        <div className="flex-grow"></div>

        <div className="flex justify-between items-end gap-2 mt-3">
          <div className="flex-1">
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <StatusDisplay status={ticket.status} />
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
