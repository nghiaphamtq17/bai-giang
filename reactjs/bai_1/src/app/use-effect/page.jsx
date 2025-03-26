"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const data = [
  "Nguyễn Văn A",
  "Trần Thị B",
  "Lê Minh C",
  "Phạm Hồng D",
  "Hoàng Văn E",
  "Đặng Thị F",
  "Bùi Anh G",
  "Ngô Quang H",
  "Vũ Thị I",
  "Dương Minh K",
  "Lý Văn L",
  "Tô Thị M",
  "Hà Hữu N",
  "Tống Ngọc O",
  "Châu Đình P",
  "Văn Tiến Q",
  "Hồ Xuân R",
  "Triệu Phong S",
  "Cao Minh T",
  "Đỗ Thị U",
];

function SearchComponent() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("term value", searchTerm);

    if (searchTerm === "") {
      setResults([]);
      return;
    }

    // debounce
    const timer = setTimeout(() => {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setResults(filteredResults);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);


  return (
    <div className="bg-white text-black min-h-screen p-4">
      <h2 className="text-xl font-bold">Search</h2>
      <Link href={"/use-callback"}>call back</Link>
      <br />
      <a href="/use-callback">call-back with tag a</a>
    <br />
      <button className="border-solid border-black border rounded px-2 py-1" onClick={()=> router.push('/use-callback')}>
        chuyen trang
      </button>
      <input
        className="px-2 py-1 border border-black rounded-md w-full"
        type="text"
        placeholder="Nhập từ khóa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="mt-2">
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={index} className="p-1 border-b">
              {item}
            </li>
          ))
        ) : (
          <li className="p-1 text-gray-500">Không có kết quả</li>
        )}
      </ul>
    </div>
  );
}

export default SearchComponent;
