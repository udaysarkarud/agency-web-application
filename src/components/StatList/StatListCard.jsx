import React from "react";

const StatListCard = ({ count, name }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <p className="bg-amber-400 p-5">ABC</p>
        <p className="font-extrabold text-xl">{count}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default StatListCard;
