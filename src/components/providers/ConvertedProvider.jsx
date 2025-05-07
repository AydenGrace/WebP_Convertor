import React, { useEffect, useState } from "react";
import { ConvertedContext } from "../../contexts/ConvertedContext";
import JSZip from "jszip";
import FileSaver from "file-saver";

export default function ConvertedProvider({ children }) {
  const [file, setFile] = useState([]);

  const [convertedFilesArray, setConvertedFileArray] = useState([]);

  const resetArray = () => {
    setConvertedFileArray([]);
    setFile([]);
  };

  const addToArray = async (file) => {
    setConvertedFileArray((convertedFilesArray) => [
      ...convertedFilesArray,
      file,
    ]);
  };

  const downloadZip = () => {
    const zip = new JSZip();
    convertedFilesArray.forEach((c) => zip.file(c.name, c.blob));
    zip.generateAsync({ type: "blob" }).then(function (content) {
      FileSaver.saveAs(content, "images-webp.zip");
    });
  };

  return (
    <ConvertedContext.Provider
      value={{
        file,
        setFile,
        convertedFilesArray,
        resetArray,
        addToArray,
        downloadZip,
      }}
    >
      {children}
    </ConvertedContext.Provider>
  );
}
