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
    <div className="p-10 space-y-5">
      <ComponentsHeading
        headingTitle={"Work List"}
        headingDes={"We provide the Perfect Solution to your business growth"}
      />
      <div className="grid grid-cols-4 gap-4 justify-center">
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
