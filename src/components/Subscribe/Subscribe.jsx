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
          <div className="mt-4 md:border-2  md:w-6/12 md:p-1 md:mx-auto rounded-lg">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered"
            />
            <button className="btn bg-orange-600 mt-2 md:mt-0 md:ml-3 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
