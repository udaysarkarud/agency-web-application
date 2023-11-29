import Image from "next/image";
import React from "react";

const FeaturedProjectCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={data.image} width={200} height={200} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {data.remark}
        </span>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
