import React from "react";
const StatListCard = ({ count, name, children }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <p className="bg-[#D7F5DC] p-5 rounded-md text-3xl">{children}</p>
        <p className="font-extrabold text-xl">{count}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default StatListCard;
