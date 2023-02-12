import React, { useEffect, useState } from "react";
import { readProductList } from "../../../api/products/readProdcutList";
import styles from "./RoomList.module.css";

export default function RoomList({ currentPage }) {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const startPage = (currentPage - 1) * 4;
    const endPage = 4;
    readProductList(startPage, endPage, setRooms);
  }, [currentPage]);
  console.log(rooms);
  return <div className={styles.container}>방 리스트</div>;
}
