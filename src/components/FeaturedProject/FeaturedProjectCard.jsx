import Image from "next/image";
import React from "react";

const FeaturedProjectCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={data.image} width={200} height={200} className="w-full" />
      <div className="px-6 py-1">
        <div className="font-bold text-sm mb-2">{data.title}</div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
