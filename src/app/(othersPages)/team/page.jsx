import ComponentsHeading from "@/components/ComponentsHeading/ComponentsHeading";
import TeamCard from "@/components/TeamCard/TeamCard";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/TeamList");
  const data = res.json();
  return data;
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <ComponentsHeading
        headingTitle={"Our Team Member"}
        headingDes={"Check our awesome team members"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((team) => {
          return <TeamCard key={team.id} team={team} />;
        })}
      </div>
    </>
  );
};

export default page;
