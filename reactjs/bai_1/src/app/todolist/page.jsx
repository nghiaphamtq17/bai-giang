"use client";

import { useState } from "react";
import styles from '../../styles/test.module.css'

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
  const [editId, setEditId] = useState(undefined); //1,2,3 -> undefind , string -> null;
  const [editText, setEditText] = useState("");

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

  const handleEdit = (id, title) => {
    setEditId(id);
    setEditText(title);
  };

  const handleConfirmChangeItem = () => {
    setList((prev) =>
      prev.map((item) =>
        item.id === editId ? { ...item, name: editText } : item
      )
    );

    setEditId(undefined);
    setEditText("");
  };

  return (
    <div 
    className="min-h-screen flex flex-col gap-4 bg-white text-black p-8"
    >
      <h1>Todo list</h1>

      {list.length ? (
        list.map((item) => {
          if (item.id === editId) {
            return (
              <div className="flex gap-2">
                <input
                  className="border-solid border-black border px-2 py-1"
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  // onClick={
                  //   () => handleConfirmChangeItem()
                  // }
                  onClick={handleConfirmChangeItem}
                  className="cursor-pointer bg-blue-400 text-white px-3 py-1"
                >
                  Submit
                </button>

                <button
                  className="cursor-pointer bg-red-400 text-white px-3 py-1"
                  onClick={() => {
                    setEditId(undefined);
                    setEditText(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            );
          }
          return (
            <div className="flex gap-2" key={item.id}>
              <div>id: {item.id},</div>
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
                className="cursor-pointer bg-red-400 text-white px-3 py-1"
                onClick={() => handleDeleteItem(item.id)}
              >
                Xoá
              </div>
              <div
                className="cursor-pointer bg-blue-400 text-white px-3 py-1"
                onClick={() => handleEdit(item.id, item.name)}
              >
                Chỉnh sửa
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
          // onClick={()=> handleAddTodo()}
        >
          submit
        </button>
      </div>
    </div>
  );
}
