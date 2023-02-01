import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../adminpage/ui/Button";
import styles from "./BoardDetail.module.css";
import { v4 as uuidv4 } from "uuid";

export default function BoardDetail({ isAdmin }) {
  const navigate = useNavigate();
  const {
    state: {
      Item: {
        ID,
        TITLE,
        DESCRIPTION,
        WRITER,
        READ_CNT,
        DATE,
        FILE_URLS,
        IMAGE_URLS,
      },
      Item,
    },
  } = useLocation();
  const [fileUrl, setFileUrl] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  useEffect(() => {
    setFileUrl(FILE_URLS.split(","));
    setImgUrl(IMAGE_URLS.split(","));
  }, [FILE_URLS, IMAGE_URLS]);
  const goEdit = () => {
    navigate(`${process.env.REACT_APP_API_ADMIN_BOARDEDIT_URL}/${ID}`, {
      state: { Item },
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
    <div>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{TITLE}</td>
            <td>{WRITER}</td>
            <td>{READ_CNT}</td>
            <td>{DATE}</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <div>
                <div>첨부파일</div>
                {fileUrl.map((file) => (
                  <a
                    key={uuidv4()}
                    type="media_type"
                    href={`${process.env.REACT_APP_URL_BOARD}/files/${ID}/${file}`}
                    download={file}
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
              <div>
                <div>첨부이미지</div>
                {imgUrl.map((img) => img)}
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>{DESCRIPTION}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
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
  );
}
