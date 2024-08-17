import CryptoJS from "crypto-js"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { message, key } = body;

    const ciphertext = CryptoJS.AES.encrypt(message, key).toString();

    return ciphertext;
})