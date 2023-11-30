import StatListCard from "./StatListCard";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GoThumbsup } from "react-icons/go";
import { CiFaceSmile } from "react-icons/ci";
import { LuCodesandbox } from "react-icons/lu";
async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/StatList");
  const data = await res.json();
  return data;
}

const StatList = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-10 my-10">
      <StatListCard count={data.followers} name={"Followers"}>
        <FaPeopleRobbery />
      </StatListCard>
      <StatListCard count={data.solved} name={"Solved Problems"}>
        <GoThumbsup />
      </StatListCard>
      <StatListCard count={data.customers} name={"Happy Customers"}>
        <CiFaceSmile />
      </StatListCard>
      <StatListCard count={data.projects} name={"Projects"}>
        <LuCodesandbox />
      </StatListCard>
    </div>
  );
};

export default StatList;
