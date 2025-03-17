"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [giaTri1, setGiaTri1] = useState(1);

  useEffect(() => {
    if (giaTri1 !== 1) {
      console.log("da thay doi tro thanh", giaTri1);
    }
    
  }, [giaTri1]);

  return (
    <div className="bg-white text-[#e06a6a] min-h-screen flex flex-col gap-4">
      <h1 className="text-2xl ">bai 1</h1>
      <div>gia tri 1 : {giaTri1}</div>

      <input
        defaultValue={giaTri1}
        onChange={(e) => setGiaTri1(e.target.value)}
        className="w-[200px] border border-solid border-black"
        type="text"
      />

      <button
        className="bg-slate-500 w-20 text-white"
        onClick={() => setGiaTri1(3)}
      >
        thay doi
      </button>
    </div>
  );
}
