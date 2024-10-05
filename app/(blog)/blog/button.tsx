"use client";
import React from "react";

const LoadMoreButton: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const button = e.currentTarget;
    button.textContent = "That's all for now";
    setTimeout(() => {
      button.style.display = "none";
    }, 3000);
  };

  return (
    <div
      className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 my-10 w-52 flex justify-center items-center font-semibold mx-auto transition-all duration-300 hover:bg-gray-100 hover:text-black"
      onClick={handleClick}
    >
      Load More
    </div>
  );
};

export default LoadMoreButton;
