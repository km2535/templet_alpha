import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../adminpage/ui/Button";
import styles from "./BoardDetail.module.css";
import { v4 as uuidv4 } from "uuid";
import { readBoardDetail } from "../../../api/board/readBoardDetail";

export default function BoardDetail({ isAdmin }) {
  const navigate = useNavigate();
  const {
    state: {
      Item: { ID },
    },
  } = useLocation();
  const [fileUrl, setFileUrl] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [board, setBoard] = useState([]);
  const [boardItem, setBoardItem] = useState([]);

  useEffect(() => {
    readBoardDetail(ID, setBoard);
  }, [ID]);
  useEffect(() => {
    setBoardItem(board?.pop());
  }, [board]);

  useEffect(() => {
    boardItem?.FILE_URLS && setFileUrl(boardItem?.FILE_URLS.split(","));
    boardItem?.IMAGE_URLS && setImgUrl(boardItem?.IMAGE_URLS.split(","));
  }, [boardItem]);
  const goEdit = () => {
    navigate(`${process.env.REACT_APP_API_ADMIN_BOARDEDIT_URL}/${ID}`, {
      state: { boardItem },
    });
  };
  const deleteHandler = () => {
    if (window.confirm("정말삭제하시겠습니까?")) {
      console.log(ID, "삭제");
    }
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.theadTr}>
            <th className={styles.thTitle}>제 목</th>
            <th className={styles.thWriter}>작성자</th>
            <th className={styles.thReadCnt}>조회수</th>
            <th className={styles.thDate}>작성일</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr className={styles.tbodyTr}>
            <td className={styles.tdTitle}>{boardItem?.TITLE}</td>
            <td className={styles.tdWriter}>{boardItem?.WRITER}</td>
            <td className={styles.tdReadCnt}>{boardItem?.READ_CNT}</td>
            <td className={styles.tdDate}>{boardItem?.DATE}</td>
          </tr>
          <tr className={styles.downloadTr}>
            <td colSpan={4}>
              <div className={styles.downloadFile}>
                <div className={styles.downloadTitle}>첨부파일</div>
                {fileUrl?.map((file) => (
                  <a
                    className={styles.download}
                    key={uuidv4()}
                    type="media_type"
                    href={`${process.env.REACT_APP_URL_BOARD}/files/${ID}/${file}`}
                    download
                  >
                    {file}
                  </a>
                ))}
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>
              <div className={styles.imgContainer}>
                {imgUrl?.map((img) => (
                  <img
                    key={uuidv4()}
                    className={styles.img}
                    src={`${process.env.REACT_APP_URL_BOARD}/images/${ID}/${img}`}
                    alt=""
                  />
                ))}
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4} className={styles.description}>
              {boardItem?.DESCRIPTION}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.btnContainer}>
        {isAdmin && (
          <div className={styles.btn}>
            <Button title="수정하기" type={"button"} callback={goEdit} />
            <Button
              title="삭제하기"
              sub={true}
              type={"button"}
              callback={deleteHandler}
            />
          </div>
        )}
        <div>
          <Button title="목록" sub={true} type={"button"} callback={goBack} />
        </div>
      </div>
    </div>
  );
}