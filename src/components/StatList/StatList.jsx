import StatListCard from "./StatListCard";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/StatList");
  const data = await res.json();
  return data;
}

const StatList = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-10 my-10">
      <StatListCard count={data.followers} name={"Followers"} />
      <StatListCard count={data.solved} name={"Solved Problems"} />
      <StatListCard count={data.customers} name={"Happy Customers"} />
      <StatListCard count={data.projects} name={"Projects"} />
    </div>
  );
};

export default StatList;
