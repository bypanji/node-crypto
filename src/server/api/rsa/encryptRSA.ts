import crypto from "node:crypto"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { message, secretKey } = body
    const encrypted = crypto.publicEncrypt(
        {
            key: Buffer.from(secretKey),
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256"
        },
        Buffer.from(message)
    )

    return encrypted.toString("base64")
})
