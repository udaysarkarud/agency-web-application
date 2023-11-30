import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosThunderstorm } from "react-icons/io";

import { LuHeartHandshake } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
const WorkListCard = ({ work }) => {
  return (
    <div className="card">
      <div className="card-body hover:shadow-xl space-y-3 group">
        <p className="bg-[#D7F5DC] p-5 text-center text-5xl rounded-lg w-4/12 md:w-1/4">
          {work.step === "01" && <IoIosThunderstorm />}
          {work.step === "02" && <LuHeartHandshake />}
          {work.step === "03" && <LuShoppingBag />}
        </p>
        <p className="font-extrabold text-3xl">{work.title}</p>
        <p>{work.des}</p>
        <Link
          href="/"
          className=" group-hover:bg-orange-500 group-hover:text-white w-1/2 flex items-center p-2 justify-center rounded-md"
        >
          Learn More
          <FaLongArrowAltRight className="mx-2" />
        </Link>
      </div>
    </div>
  );
};

export default WorkListCard;
