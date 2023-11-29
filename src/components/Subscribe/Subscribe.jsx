import React from "react";

const Subscribe = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center">
        <div className="text-center  w-2/3 space-y-4">
          <p className="uppercase text-teal-500	">SUBSCRIBE</p>
          <h3 className="text-3xl font-bold">
            Subscribe to get the latest news about us
          </h3>
          <p>
            Please drop your email below to get daily update about what we do
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent"
            />
            <button className="btn btn-primary mt-2 md:mt-0 md:ml-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
