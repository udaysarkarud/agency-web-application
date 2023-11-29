import ComponentsHeading from "@/components/ComponentsHeading/ComponentsHeading";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/TeamList");
  const data = res.json();
  return data;
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <ComponentsHeading />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((team) => {
          return (
            <div key={team.id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={team.image}
                  width={100}
                  height={100}
                  alt={team.name}
                  className="rounded-xl shadow-2xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{team.name}</h2>
                <p>{team.bio}</p>
                <div className="flex space-x-4 text-teal-500 text-2xl mt-5">
                  <FaFacebook className="hover:text-black" />
                  <FaTwitter className="hover:text-black" />
                  <BsInstagram className="hover:text-black" />
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-[#D7F5DC] hover:bg-black hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
