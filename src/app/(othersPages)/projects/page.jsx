import ComponentsHeading from "@/components/ComponentsHeading/ComponentsHeading";
import Image from "next/image";
async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/AllProject");
  const data = res.json();
  return data;
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <ComponentsHeading
        headingTitle={"All Project"}
        headingDes={"Better Agency/SEO Solution At Your Fingertips"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((project) => {
          return (
            <div
              key={project.id}
              className=" bg-white p-8 shadow-md space-y-5 rounded-xl"
            >
              <Image
                src={project.image}
                width={1000}
                height={300}
                alt={project.title}
                className="rounded-xl"
              />
              <h1 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
