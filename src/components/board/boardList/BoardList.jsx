import React from "react";
import styles from "./BoardList.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { readBoardCnt } from "../../../api/board/readBoardCnt";
import ReactPaginate from "react-paginate";
import BoardListItems from "../boardListItems/BoardListItems";

export default function BoardList() {
  const [totalCnt, setTotalCnt] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  //여기서 게시판의 데이터를 읽는다.
  useEffect(() => {
    readBoardCnt(setTotalCnt);
  }, []);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <BoardListItems page={currentPage} totalPage={totalCnt} />
        </tbody>
      </table>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={Math.ceil(totalCnt / 10)}
      />
    </div>
  );
}
