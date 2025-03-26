"use client"

"use client";

import { useEffect, useState, useCallback } from "react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // ✅ useCallback giúp giữ nguyên handleSearch, chỉ tạo lại khi `results` thay đổi
  const handleSearch = useCallback(() => {
    console.log("🔍 Kết quả tìm kiếm:", results);
  }, [results]);

  return (
    <div className="bg-white text-black min-h-screen p-4">
      <h2 className="text-xl font-bold">Search</h2>
      <input
        className="px-2 py-1 border border-black rounded-md w-full"
        type="text"
        placeholder="Nhập từ khóa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={handleSearch}
      >
        Log kết quả tìm kiếm
      </button>
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
