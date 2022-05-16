import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

const Card = ({ bgColor }) => {
  return (
    <div
      className={`min-h-44 p-5 rounded-2xl flex-grow space-y-5 ${
        bgColor ? bgColor : "bg-darkGray"
      }`}
    >
      <div className="flex justify-between items-center">
        <p>123456789</p>
        <PlusCircleIcon className="w-8" />
      </div>
      <div className="text-3xl font-bold">$7,200</div>
      <div>Lorem ipsum dolor sit amet.</div>
    </div>
  );
};

export default Card;
