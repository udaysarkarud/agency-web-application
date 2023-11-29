import React from "react";
const StatListCard = ({ count, name }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <p className="bg-teal-500 p-5 rounded-md">ABC</p>
        <p className="font-extrabold text-xl">{count}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default StatListCard;
