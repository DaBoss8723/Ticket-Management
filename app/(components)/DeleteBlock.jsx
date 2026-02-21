"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async (e) => {
    e.preventDefault(); // Add this line
    e.stopPropagation(); // Add this line

    try {
      console.log("Deleting ticket with ID:", id);
      const res = await fetch(`/api/Tickets/${id}`, {
        method: "DELETE",
      });

      console.log("Delete response:", res.status, res.ok);

      if (res.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        console.error("Failed to delete ticket:", res.status);
      }
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
