import styles from './MainContent.module.scss'
import HowTo from "../HowTo/HowTo";

import { useDropzone } from 'react-dropzone'
import React, { useCallback } from "react";

const Dropzone: React.FC = () => {
    // Callback для обработки файлов
    const onDrop = useCallback((acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        console.log(`Файл загружен: ${file.name}`);
      });
    }, []);
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: {
        "text/csv": [".csv"],
        "application/json": [".json"],
      },
      multiple: false, // Разрешить только один файл
    });
  
    return (
      <div
        {...getRootProps()}
        style={{
          width: "100%",
          minHeight: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px dashed #ccc",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: isDragActive ? "#f0f8ff" : "#fafafa",
          transition: "background-color 0.3s",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Отпустите файл для загрузки</p>
        ) : (
          <p>Перетащите файл сюда или нажмите для выбора</p>
        )}
      </div>
    );
  };

export default function MainContent() {
    // тут будет тернарный оператор для upload или calcs 

    return (
        <div className={styles.upload_content}>
            <div className={styles.mem}>
                <Dropzone/>
            </div>
            <HowTo />
        </div>
    )
}