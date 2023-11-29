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
      <div className="hero-section p-10 flex flex-row items-center justify-center">
        <div className="w-1/2 space-y-4">
          <div>
            <h1 className="font-extrabold text-3xl">{data.title}</h1>
            <p>{data.description}</p>
          </div>
          <button className="btn btn-success text-white">Get Started</button>
        </div>
        <div className="w-1/2 flex gap-2">
          <div className="flex flex-col  gap-2">
            <Image
              src={data.image1}
              width={250}
              height={250}
              alt="Hero image"
            />
            <Image
              src={data.image2}
              width={250}
              height={250}
              alt="Hero image"
            />
          </div>
          <div className="flex flex-col  gap-2">
            <Image
              src={data.image3}
              width={250}
              height={250}
              alt="Hero image"
            />
            <Image
              src={data.image4}
              width={250}
              height={250}
              alt="Hero image"
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
