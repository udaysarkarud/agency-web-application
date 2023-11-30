import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const TeamCard = ({ team }) => {
  return (
    <div key={team.id} className="card bg-base-100 shadow-xl group">
      <figure className="relative">
        <Image
          src={team.image}
          width={300}
          height={300}
          alt={team.name}
          className="object-cover  w-full h-70"
        />
      </figure>

      <div className="absolute mt-80 ml-20 hidden justify-end group-hover:block">
        <div className="flex justify-center space-x-9 text-4xl mt-5 bg-slate-300 rounded-full p-3">
          <Link href={team.facebook}>
            <FaFacebook className="hover:text-teal-500" />
          </Link>
          <Link href={team.facebook}>
            <FaTwitter className="hover:text-teal-500" />
          </Link>
          <Link href={team.facebook}>
            <BsInstagram className="hover:text-teal-500" />
          </Link>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center my-5">{team.name}</h2>
    </div>
  );
};

export default TeamCard;
