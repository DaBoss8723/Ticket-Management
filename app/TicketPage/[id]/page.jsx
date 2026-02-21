import TicketForm from "@/app/(components)/TicketForm";

const getBaseUrl = () => {
  // For Vercel production
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // For custom domain on Vercel
  if (process.env.NEXT_PUBLIC_VERCEL_URL) return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  // Fallback for local development
  return process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
};

const getTicketById = async (id) => {
  const baseUrl = getBaseUrl();
  console.log("Fetching ticket from:", `${baseUrl}/api/Tickets/${id}`);
  const res = await fetch(`${baseUrl}/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch ticket");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const { id } = await params;

  const EDITMODE = id !== "new";
  let updateTicketData = { _id: "new" };

  if (EDITMODE) {
    try {
      const data = await getTicketById(id);

      if (data?.foundTicket) {
        updateTicketData = data.foundTicket;
      } else {
        return <div>Ticket not found</div>;
      }
    } catch (error) {
      return <div>Error loading ticket: {error.message}</div>;
    }
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
