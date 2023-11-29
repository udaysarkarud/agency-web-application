import Image from "next/image";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/BrandList");
  const data = await res.json();
  return data;
}
const OurPartners = async () => {
  const data = await getData();
  return (
    <div className="bg-slate-300  p-10">
      <div className="grid grid-cols-4 gap-4 items-center">
        {data.map((brand) => {
          return (
            <Image
              key={brand.id}
              src={brand.image}
              width={100}
              height={100}
              alt={brand.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurPartners;
