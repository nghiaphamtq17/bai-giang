import { useMemo } from "react";

export function TinhToan({ giatri }) {
  const result = useMemo(() => {
    console.log("tinh toan lai");
    return giatri * 2;
  }, [giatri]);

  return <p>Ket qua: {result}</p>;
}
