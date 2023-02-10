import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styles from "./ReplyItem.module.css";
export default function ReplyItem({ item }) {
  const [fileUrl, setFileUrl] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const { ID, WRITER, DESCRIPTION, FILE_URLS, IMAGE_URLS, DATE } = item;
  useEffect(() => {
    FILE_URLS && setFileUrl(FILE_URLS.split(","));
    IMAGE_URLS && setImgUrl(IMAGE_URLS.split(","));
  }, [FILE_URLS, IMAGE_URLS]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.WRITER}>{WRITER}</div>
        <div className={styles.DATE}>{DATE}</div>
      </div>
      <div className={styles.DESCRIPTION}>{DESCRIPTION}</div>
      <div className={styles.download}>
        <div className={styles.FILE_URLS}>
          <div className={styles.fileTitle}>
            {fileUrl?.length > 0 && "[첨부된 파일]"}
          </div>
          {fileUrl?.map((file) => (
            <a
              className={styles.file}
              key={uuidv4()}
              type="media_type"
              href={`${process.env.REACT_APP_URL_REPLY}/files/${ID}/${file}`}
              download
            >
              {file}
            </a>
          ))}
        </div>
        <div className={styles.IMAGE_URLS}>
          <div className={styles.fileTitle}>
            {imgUrl?.length > 0 && "[첨부된 이미지]"}
          </div>
          <div className={styles.imgContent}>
            {imgUrl?.map((img) => (
              <img
                key={uuidv4()}
                className={styles.img}
                src={`${process.env.REACT_APP_URL_REPLY}/images/${ID}/${img}`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
