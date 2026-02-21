import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex flex-row flex-nowrap items-center justify-start gap-2 whitespace-nowrap">
      <FontAwesomeIcon
        icon={faFire}
        className={`${
          priority > 1 ? "text-red-400" : "text-slate-400"
        } shrink-0`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${
          priority > 2 ? "text-red-400" : "text-slate-400"
        } shrink-0`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${
          priority > 3 ? "text-red-400" : "text-slate-400"
        } shrink-0`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${
          priority > 4 ? "text-red-400" : "text-slate-400"
        } shrink-0`}
      />
    </div>
  );
};

export default PriorityDisplay;
