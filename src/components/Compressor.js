import imageCompression from "browser-image-compression";

const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

export default async function Compressor(imageFile) {
  try {
    const compressedFile = await imageCompression(imageFile, options);

    return compressedFile; // write your own logic
  } catch (error) {
    console.log(error);
  }
}
