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
    <div className="p-10 my-10 space-y-20 ">
      <ComponentsHeading
        headingTitle={"Featured Project"}
        headingDes={"We provide the Perfect Solution to your business growth"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((fproduct) => {
          return <FeaturedProjectCard key={fproduct.id} data={fproduct} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProject;
