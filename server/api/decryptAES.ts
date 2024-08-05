import CryptoJS from "crypto-js"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { message, key } = body;

    const originalText = CryptoJS.AES.decrypt(message, key).toString();

    return originalText;
});