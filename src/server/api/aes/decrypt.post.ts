import CryptoJS from "crypto-js"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { message, key } = body;

  const bytes = CryptoJS.AES.decrypt(message, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);

  return originalText;
});
