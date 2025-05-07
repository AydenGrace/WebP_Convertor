import { FileUploader } from "react-drag-drop-files";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Item from "./components/Item";
import Zipper from "./components/Zipper";
import { ConvertedContext } from "./contexts/ConvertedContext";

function App() {
  const fileTypes = [
    "JPG",
    "PNG",
    "GIF",
    "JPEG",
    "JPE",
    "JIF",
    "JFIF",
    "JFI",
    "GIF",
    "WEBP",
    "TIFF",
    "TIF",
    "JP2",
    "J2K",
    "JPF",
    "JPX",
    "JPM",
    "MJ2",
    "SVG",
    "SVGZ",
  ];
  const { convertedFilesArray, file, setFile } = useContext(ConvertedContext);

  useEffect(() => {
    if (file.length && file.length === convertedFilesArray.length)
      setFinish(true);
    else setFinish(false);
  }, [convertedFilesArray]);

  const [finish, setFinish] = useState(false);
  const handleChange = (newFile) => {
    setFile([]);
    setFile([...file, ...newFile]);
  };
  return (
    <div className="flex flex-col w-full min-h-screen items-center ">
      <header className="w-full h-16 bg-gradient-to-b from-purple-800 to-purple-950 items-center flex px-4 text-white">
        <h1 className="font-bold text-2xl translate-y-[-2px]">
          WebP & Compressor
        </h1>
      </header>
      <main className="p-4 flex flex-col w-full flex-1 items-center justify-center px-4 sm:px-[15%] md:px-[25%]">
        <div className=" bg-white w-full max-w-[600px] shadow-xl rounded-lg overflow-hidden">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            multiple={true}
            hoverTitle={"Déposez ici"}
            dropMessageStyle={{
              backgroundColor: "var(--color-purple-900)",
              color: "var(--color-white)",
            }}
          >
            <div className="w-full cursor-pointer bg-purple-800 min-h-15 p-4 flex justify-between items-center text-white font-bold">
              Ajouter des fichiers
              <button className="font-semibold cursor-pointer bg-gradient-to-b from-purple-800 to-purple-950 p-2 px-3 rounded border-purple-950 hover:bg-gradient-to-b hover:from-purple-600 hoverto-purple-750">
                Cliquez ici
              </button>
            </div>
          </FileUploader>
          <div className="bg-gray-50 w-full flex flex-col">
            {file.map((f, idx) => (
              <Item file={f} key={idx} />
            ))}
            {finish && <Zipper />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
