import crypto from "node:crypto"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { message, key } = body
    const decrypt = crypto.privateDecrypt({
        key: Buffer.from(key),
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256"
    },
    Buffer.from(message, "base64")
    )

    return decrypt.toString()

})
