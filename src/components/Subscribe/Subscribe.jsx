import React from "react";

const Subscribe = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">
            Subscribe to get the latest news about us
          </h1>
          <p className="py-6">
            Please drop your email below to get daily update about what we do
          </p>
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
