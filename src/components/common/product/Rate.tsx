import React from "react";
import { AiFillStar } from "react-icons/ai";

const Rate = (props: { rateNumber: number }) => {
  const { rateNumber } = props;
  return (
    <div className="flex ml-8">
      {Array.from(Array(rateNumber)).map((_, i) => (
        <AiFillStar key={i} size={25} className="text-primary" />
      ))}
      {Array.from(Array(5 - rateNumber)).map((_, i) => (
        <AiFillStar key={i} size={25} className="text-gray-200" />
      ))}
    </div>
  );
};

export default Rate;
