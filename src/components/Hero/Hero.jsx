import Image from "next/image";
import OurPartners from "./OurPartners";
import Navbar from "../Navbar/Navbar";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/HeroList");
  const data = await res.json();
  return data;
}

const Hero = async () => {
  const data = await getData();
  return (
    <div className="bg-[#D7F5DC] pb-10">
      <Navbar />
      <div className="hero-section p-5 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between space-y-5 md:space-y-0">
        <div className="md:w-1/3 space-y-5 ">
          <h1 className="font-extrabold text-3xl md:text-5xl">{data.title}</h1>
          <p>{data.description}</p>
          <button className="btn btn-success text-white">Get Started</button>
        </div>
        <div className="md:w-1/2 flex gap-2 justify-end">
          <div className="flex flex-col  gap-2">
            <Image
              src={data.image1}
              width={250}
              height={250}
              alt="Hero image"
              className="rounded-lg"
            />
            <Image
              src={data.image2}
              width={250}
              height={250}
              alt="Hero image"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col  gap-2">
            <Image
              src={data.image3}
              width={250}
              height={250}
              alt="Hero image"
              className="rounded-lg"
            />
            <Image
              src={data.image4}
              width={250}
              height={250}
              alt="Hero image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <OurPartners />
    </div>
  );
};

export default Hero;
