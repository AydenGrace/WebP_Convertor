import { arrayBufferToWebP } from "webp-converter-browser";
import Compressor from "./Compressor";

export async function Convert(file) {
  try {
    const webpBlob = await arrayBufferToWebP(await Compressor(file));
    return webpBlob;
  } catch (error) {
    console.error(error);
  }
}
