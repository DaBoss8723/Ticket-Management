import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="relative flex items-center justify-between bg-[var(--color-nav)] p-4">
      {/* Left icons */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>

      {/* Center text */}
      <h2 className="absolute left-1/2 -translate-x-1/2 text-[var(--color-default-text)]">
        Ticket Management App
      </h2>

      {/* Right email */}
      <p className="text-[var(--color-default-text)]">Abdi@gmail.com</p>
    </nav>
  );
};

export default Nav;
