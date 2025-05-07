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

  return (
    <div className="w-full flex justify-between items-center border-b-purple-800 border-b-1">
      <div className="flex p-4">
        {file.name.split(".").slice(0, -1).join(".") + ".webp"}
      </div>
      <a
        href={convertedFile ? convertedFile : null}
        download={true}
        className="flex p-4 gap-1 items-center bg-purple-900 text-white font-semibold cursor-pointer hover:bg-purple-800 border-b-1 w-[140px] justify-center h-[56px]"
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
