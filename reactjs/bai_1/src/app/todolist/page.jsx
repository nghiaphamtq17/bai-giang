"use client";

import { useId, useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState(null);
  const [list, setList] = useState([
    {
      id: 1,
      name: "Đi học",
      status: false,
    },
    {
      id: 2,
      name: "Đi làm",
      status: true,
    },
  ]);

  const handleAddTodo = () => {
    if (inputValue) {
      setList([
        ...list,
        {
          id: list.length + 1,
          name: inputValue,
          status: false,
        },
      ]);

      setInputValue("");
    }
  };

  const handleChangeStatus = (id) => {
    if (id) {
      setList((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, status: item.status === true ? false : true }
            : item
        )
      );
    }
  };

  const handleDeleteItem = (id) => {
    if (id) {
      const newList = list.filter((item) => item.id !== id);
      setList(newList);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 bg-white text-black">
      <h1>Todo list</h1>

      {list.length ? (
        list.map((item) => {
          return (
            <div className="flex gap-2" key={item.id}>
                <div>
                    id: {item.id},
                </div>
              <div>công việc: {item.name},</div>
              <div>
                trạng thái:{" "}
                <input
                  onClick={() => handleChangeStatus(item.id)}
                  checked={item.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                ,
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleDeleteItem(item.id)}
              >
                Xoá
              </div>
            </div>
          );
        })
      ) : (
        <div>Chưa có công việc</div>
      )}

      <div className="flex gap-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="w-[200px] border border-solid border-black"
        />
        <button
          className="bg-cyan-600 text-white py-2 px-4"
          onClick={handleAddTodo}
        >
          submit
        </button>
      </div>
    </div>
  );
}
