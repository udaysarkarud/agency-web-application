import Footer from "@/components/Footer/Footer";
import Subscribe from "@/components/Subscribe/Subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <button className="btn btn-primary">Primary</button>
      <Subscribe />
      <Footer />
    </>
  );
}
