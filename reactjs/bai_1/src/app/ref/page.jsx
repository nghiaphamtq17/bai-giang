"use client"

import { useRef } from "react";

export default function ref() {
  const refV = useRef(0);

  function handleClick() {
    refV.current = refV.current + 1;
    alert('You clicked ' + refV.current + ' times!');
  }

  return (
    <div className="min-h-screen bg-white text-black">

      <button onClick={handleClick}>Click</button>
    </div>
  );
}
