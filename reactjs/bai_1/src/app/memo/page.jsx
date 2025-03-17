"use client";

import { TinhToan } from "../../components/tinhtoan";
import { useState } from "react";

export default function memo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  console.log("count", count);
  console.log("number", num);

  return (
    <div>
      <TinhToan giatri={num} />
      <button onClick={() => setCount(count + 1)}>tang count</button>
      <br />
      <button onClick={() => setNum(num + 1)}>tnag number</button>
    </div>
  );
}
