import ComponentsHeading from "@/components/ComponentsHeading/ComponentsHeading";
import Image from "next/image";
import React from "react";
async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/TestimonialList");
  const data = res.json();
  return data;
}
const page = async () => {
  const data = await getData();
  return (
    <>
      <ComponentsHeading
        headingTitle={"Testimonial List"}
        headingDes={"Better Agency/SEO Solution At Your Fingertips"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <Image
                  src={testimonial.image}
                  width={100}
                  height={100}
                  alt={testimonial.name}
                  className="rounded-xl shadow-2xl"
                />
              </figure>
              <div className="card-body text-center">
                <p>{testimonial.msg}</p>
                <h2 className="text-center font-extrabold text-2xl">
                  {testimonial.name}
                </h2>
                <p>{testimonial.designation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
