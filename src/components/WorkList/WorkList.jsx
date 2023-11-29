import ComponentsHeading from "../ComponentsHeading/ComponentsHeading";
import WorkListCard from "./WorkListCard";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/WorkList");
  const data = await res.json();
  return data;
}

const WorkList = async () => {
  const data = await getData();
  return (
    <div className="p-10">
      <ComponentsHeading
        headingTitle={"Work List"}
        headingDes={"We provide the Perfect Solution to your business growth"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((work) => {
          return (
            <WorkListCard
              key={work.id}
              workTitle={work.title}
              WorkDes={work.des}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkList;
