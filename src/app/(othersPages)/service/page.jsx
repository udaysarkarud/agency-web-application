import ComponentsHeading from "@/components/ComponentsHeading/ComponentsHeading";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/AllService");
  const data = res.json();
  return data;
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <ComponentsHeading
        headingTitle={"Our All Services"}
        headingDes={"We Provide BestWeb design services"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((service) => {
          return (
            <div
              key={service.id}
              className="max-w-2xl mx-auto bg-white p-8 shadow-md space-y-5 rounded-xl"
            >
              <h1 className="text-3xl font-bold text-gray-800">
                {service.title}
              </h1>
              <p className="text-gray-500">{service.des}</p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={service.image1}
                  width={300}
                  height={300}
                  alt={service.title}
                  className="rounded-xl"
                />
                <Image
                  src={service.image2}
                  width={300}
                  height={300}
                  alt={service.title}
                  className="rounded-xl"
                />
                <Image
                  src={service.image3}
                  width={300}
                  height={300}
                  alt={service.title}
                  className="rounded-xl"
                />
                <Image
                  src={service.image4}
                  width={300}
                  height={300}
                  alt={service.title}
                  className="rounded-xl"
                />
              </div>
              <p className="bg-slate-300 p-1 rounded-lg md:w-1/2 text-center">
                #{service.tag}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
