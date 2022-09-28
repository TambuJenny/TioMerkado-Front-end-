import React from "react";
import { InputHTMLAttributes } from 'react';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  url:string
}
export function ButtonBrand(props:InputProps) {
  return (
    <button
    value ="btn"
      {...props}
      id="brand"
      className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] "
    >
      <img
        src={props.url}
        alt=""
        className="w-12 h-12 "
      />
    </button>
  );
}
