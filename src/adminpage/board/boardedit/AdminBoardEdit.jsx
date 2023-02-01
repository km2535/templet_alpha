import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./AdminBoardEdit.module.css";

export default function AdminBoardEdit() {
  const {
    state: { Item },
  } = useLocation();
  console.log(Item);
  return <div className={styles.container}>수정</div>;
}
