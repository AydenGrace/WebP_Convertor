import React, { useContext } from "react";
import { IoMdDownload } from "react-icons/io";
import { ConvertedContext } from "../contexts/ConvertedContext";
import { TfiReload } from "react-icons/tfi";

export default function Zipper() {
  const { downloadZip, resetArray } = useContext(ConvertedContext);

  const onClick = () => {
    downloadZip();
  };
  return (
    <div className="w-full flex justify-between items-cente">
      <button
        className="group flex max-w-[300px] p-1 px-4 bg-gray-200 hover:bg-gray-400 text-[##D0D1D3] items-center cursor-pointer gap-2 font-semibold"
        onClick={resetArray}
      >
        <TfiReload className="transition group-hover:rotate-[-180deg] duration-700" />
        Reset
      </button>
      <a
        href={null}
        className="flex p-4 gap-1 items-center bg-purple-900 text-white font-semibold cursor-pointer hover:bg-purple-800 justify-center"
        onClick={onClick}
      >
        <>
          <IoMdDownload />
          Télécharger l'archive
        </>
      </a>
    </div>
  );
}
