"use client";
import React from "react";
import styles from "./Button.module.scss"
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={styles.button}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
