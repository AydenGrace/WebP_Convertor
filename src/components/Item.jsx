import React, { useContext, useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Convert } from "../components/WebP";
import { ConvertedContext } from "../contexts/ConvertedContext";

export default function Item({ file }) {
  const [convertedFile, setConvertedFile] = useState(null);
  const { addToArray } = useContext(ConvertedContext);

  const convertAndCompress = async (file) => {
    const convFile = await Convert(file);
    addToArray({
      blob: convFile,
      name: file.name.split(".").slice(0, -1).join(".") + ".webp",
    });
    setConvertedFile(URL.createObjectURL(convFile));
  };

  useEffect(() => {
    if (file) convertAndCompress(file);
  }, [file]);

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  return (
    <div className="w-full flex justify-between items-center border-b-purple-800 border-b-1">
      <div className="flex p-4">
        <p className="break-words line-clamp-1">
          {file.name.split(".").slice(0, -1).join(".") + ".webp"}
        </p>
      </div>
      <a
        href={convertedFile ? convertedFile : null}
        download={file.name.split(".").slice(0, -1).join(".") + ".webp"}
        className="flex p-4 gap-1 items-center bg-purple-900 text-white font-semibold cursor-pointer hover:bg-purple-800 border-b-1 min-w-[140px] justify-center min-h-[56px]"
      >
        {convertedFile ? (
          <>
            <IoMdDownload />
            Télécharger
          </>
        ) : (
          <>
            <AiOutlineLoading3Quarters className="animate-spin" />
          </>
        )}
      </a>
    </div>
  );
}
