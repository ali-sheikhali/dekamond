"use client";
import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-blue-600 w-full text-white px-4 py-2 rounded cursor-pointer"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
