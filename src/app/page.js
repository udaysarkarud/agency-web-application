import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Footer from "@/components/Footer/Footer";
import StatList from "@/components/StatList/StatList";
import Subscribe from "@/components/Subscribe/Subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <button className="btn btn-primary">Primary</button>
      <StatList />
      <FeaturedProject />
      <Subscribe />
      <Footer />
    </>
  );
}
