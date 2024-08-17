import { createHmac } from "node:crypto"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { message, key } = body;

    const hmac = createHmac("sha256", key);
    hmac.update(message);

    return hmac.digest("base64");
});