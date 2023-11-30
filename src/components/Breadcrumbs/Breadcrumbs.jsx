"use client";
import { IoIosArrowForward } from "react-icons/io";

import { usePathname } from "next/navigation";
const Breadcrumbs = () => {
  const path = usePathname();
  const pathNames = path.split("/").filter((path) => path);
  return (
    <div className="space-y-3 p-5 md:p-10">
      <h1 className="text-3xl font-extrabold capitalize">{pathNames}</h1>
      <div className="flex items-center space-x-3 capitalize font-bold text-1xl">
        <p>Home</p>
        <IoIosArrowForward />
        <p className="text-teal-500">{pathNames}</p>
      </div>
    </div>
  );
};

export default Breadcrumbs;
