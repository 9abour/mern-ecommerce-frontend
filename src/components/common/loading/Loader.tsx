import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen grid place-items-center bg-gray-50">
      <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
    </div>
  );
};

export default Loader;
