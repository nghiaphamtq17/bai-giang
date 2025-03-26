"use client"

import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 10000000 }, (_, i) => `Người dùng ${i + 1}`);

export default function VirtualizedList() {
  return (
    <List
      height={500} 
      itemCount={items.length}
      itemSize={35} 
      width={"100%"}
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </List>
  );
}