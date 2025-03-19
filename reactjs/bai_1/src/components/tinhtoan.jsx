import { useMemo } from "react";

export function TinhToan({ giatri }) {
  const result = useMemo(() => {
    return giatri * 2;
  }, [giatri]);

  return <p>Ket qua: {result}</p>;
}
