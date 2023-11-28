import React from "react";

const ComponentsHeading = ({ headingTitle, headingDes }) => {
  return (
    <div className="w-96">
      <p className="uppercase text-teal-500	">{headingTitle}</p>
      <h2 className="font-extrabold text-2xl">{headingDes}</h2>
    </div>
  );
};

export default ComponentsHeading;
