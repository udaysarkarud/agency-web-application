import Image from "next/image";
import React from "react";

const FeaturedProjectCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={data.image} width={200} height={200} className="w-full" />
      <div className="px-3 pt-2">
        <span className="inline-blockrounded-full px-3 py-1 text-sm font-light text-gray-400 mr-2 mb-2">
          App Design - June 20, 2022
        </span>
      </div>
      <div className="px-6">
        <div className="font-bold text-sm mb-2">{data.title}</div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
