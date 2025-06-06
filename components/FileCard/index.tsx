import React, { useState } from "react";
import styles from "./FileCard.module.scss";
import { getExtensionFromFileName } from "@/utils/getExtensionFromFileName";
import { isImage } from "@/utils/isImage";
import { getColorByExtension } from "@/utils/getColorByExtension";
import { FileTextOutlined } from "@ant-design/icons";

interface FileCardProps {
  filename: string;
  originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({
  originalName,
  filename,
}) => {
  const ext = getExtensionFromFileName(filename);
  const isImg = isImage(ext);
  const imageUrl = isImg ? `http://localhost:7777/uploads/${filename}` : "";
  const color = getColorByExtension(ext);
  const classColor = styles[color];

  const [isBroken, setIsBroken] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={classColor}>{ext}</i>
        {isImg && !isBroken ? (
          <img
            className={styles.image}
            src={imageUrl}
            alt="File preview"
            onError={() => setIsBroken(true)}
          />
        ) : (
          <FileTextOutlined className={styles.fallbackIcon} />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};