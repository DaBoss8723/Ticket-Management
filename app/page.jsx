import TicketCard from "./(components)/TicketCard";

const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NEXT_PUBLIC_URL) return process.env.NEXT_PUBLIC_URL;
  return "http://localhost:3000";
};

const getTickets = async () => {
  try {
    const res = await fetch(`${getBaseUrl()}/api/Tickets`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("API returned error:", res.status);
      return {};
    }

    return res.json();
  } catch (error) {
    console.log("Error fetching tickets:", error);
    return {};
  }
};

const Dashboard = async () => {
  const response = await getTickets();
  console.log("Response from API:", response);
  const tickets = response?.tickets || [];
  console.log("Tickets array:", tickets);

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log("Unique categories:", uniqueCategories);

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
