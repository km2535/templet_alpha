import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BoardItem.module.css";

export default function BoardItem({ Item, index, page, totalPage }) {
  const navigate = useNavigate();
  const { DATE, READ_CNT, TITLE, WRITER, ID } = Item;
  const [boardNum, setBoardNum] = useState(totalPage);
  const clickHandler = (e) => {
    const { id } = e.target;
    navigate(`${process.env.REACT_APP_API_BOARD_DETAIL_URL}/${id}`, {
      state: { Item },
    });
  };
  useEffect(() => {
    const boardNumber = totalPage - (page - 1) * 10 - index;
    if (boardNumber > 0) {
      setBoardNum(boardNumber);
    }
  }, [totalPage, index, page]);
  return (
    <tr className={styles.container}>
      <td>{boardNum}</td>
      <td id={ID} onClick={clickHandler}>
        {TITLE}
      </td>
      <td>{WRITER}</td>
      <td>{READ_CNT}</td>
      <td>{DATE}</td>
    </tr>
  );
}