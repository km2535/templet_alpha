import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { readBoards } from "../../../api/board/readBoards";
import BoardItem from "../boardItem/BoardItem";

export default function BoardListItems({ page, totalPage }) {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    const startPage = (page - 1) * 10;
    const endPage = page * 10;
    readBoards(startPage, endPage, setBoards);
  }, [page]);
  return (
    <>
      {boards?.map((Item, index) => (
        <BoardItem
          key={Item?.ID}
          Item={Item}
          index={index}
          page={page}
          totalPage={totalPage}
        />
      ))}
    </>
  );
}
