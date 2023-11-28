import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Footer from "@/components/Footer/Footer";
import StatList from "@/components/StatList/StatList";
import Subscribe from "@/components/Subscribe/Subscribe";
import WorkList from "@/components/WorkList/WorkList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <button className="btn btn-primary">Primary</button>
      <WorkList />
      <StatList />
      <FeaturedProject />
      <Subscribe />
      <Footer />
    </>
  );
}
