import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import StatList from "@/components/StatList/StatList";
import Subscribe from "@/components/Subscribe/Subscribe";
import WorkList from "@/components/WorkList/WorkList";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <StatList />
      <FeaturedProject />
      <Subscribe />
      <Footer />
    </>
  );
}
