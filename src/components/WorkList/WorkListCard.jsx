import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const WorkListCard = ({ workTitle, WorkDes }) => {
  return (
    <div className="card">
      <div className="card-body hover:shadow-xl space-y-3 group">
        <p className="bg-[#D7F5DC] p-5 rounded-lg w-1/4 text-center">ABC</p>
        <p className="font-extrabold text-3xl">{workTitle}</p>
        <p>{WorkDes}</p>
        <button className="btn group-hover:bg-orange-500 group-hover:text-white w-1/2">
          Learn More
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default WorkListCard;
