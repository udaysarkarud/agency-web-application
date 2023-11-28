import React from "react";

const WorkListCard = ({ workTitle, WorkDes }) => {
  return (
    <div>
      <p className="bg-amber-400 p-5">ABC</p>
      <p className="font-extrabold text-xl">{workTitle}</p>
      <p>{WorkDes}</p>
      <p>Learn More-</p>
    </div>
  );
};

export default WorkListCard;
