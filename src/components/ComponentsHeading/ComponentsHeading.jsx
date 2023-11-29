import React from "react";

const ComponentsHeading = ({ headingTitle, headingDes }) => {
  return (
    <div className="md:w-1/2">
      <p className="uppercase text-teal-500	">{headingTitle}</p>
      <h2 className="font-bold text-3xl">{headingDes}</h2>
    </div>
  );
};

export default ComponentsHeading;
