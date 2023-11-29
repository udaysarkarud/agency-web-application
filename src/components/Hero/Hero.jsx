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
    <div className="bg-green-300">
      <Navbar />
      <div className="hero-section py-10 flex items-center justify-around">
        <div className="w-1/3 space-y-5 ">
          <h1 className="font-extrabold text-5xl">{data.title}</h1>
          <p>{data.description}</p>
          <button className="btn btn-success text-white">Get Started</button>
        </div>
        <div className="w-1/2 flex gap-2 justify-end">
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
        {/*  <div className="w-1/2 grid grid-cols-2 gap-3">
          <Image src={data.image1} width={300} height={300} alt="Hero image" />
          <Image src={data.image2} width={300} height={300} alt="Hero image" />
          <Image src={data.image3} width={300} height={300} alt="Hero image" />
          <Image src={data.image4} width={300} height={300} alt="Hero image" />
        </div> */}
      </div>
      <OurPartners />
    </div>
  );
};

export default Hero;
