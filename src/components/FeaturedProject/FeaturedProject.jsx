import Image from "next/image";
import ComponentsHeading from "../ComponentsHeading/ComponentsHeading";
import FeaturedProjectCard from "./FeaturedProjectCard";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
  const data = await res.json();
  return data;
}
const FeaturedProject = async () => {
  const data = await getData();
  return (
    <div className="p-5 md:p-10 my-10 space-y-20 ">
      <ComponentsHeading
        headingTitle={"Featured Project"}
        headingDes={"We provide the Perfect Solution to your business growth"}
      />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded overflow-hidden shadow-lg justify-center">
            <Image
              src={data[0]["image"]}
              width={500}
              height={500}
              className="w-full h-fit object-cover"
              alt=""
            />
            <div className="flex flex-col justify-center md:mt-5">
              <div className="px-3 pt-4">
                <span className="inline-block rounded-full px-3 py-1 text-sm font-light text-gray-400 mr-2 mb-2">
                  App Design - June 20, 2022
                </span>
              </div>
              <div className="px-6">
                <div className="font-bold text-xl mb-2 md:mb-0">
                  {data[0]["title"]}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.slice(2).map((fproduct) => {
              return <FeaturedProjectCard key={fproduct.id} data={fproduct} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
