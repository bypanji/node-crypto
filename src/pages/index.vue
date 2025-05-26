<script lang="ts" setup>

const message = ref<string>("")
const aesKey = ref<string>("")
const encrypted = ref<string>("")
const decrypted = ref<string>("")
const handleEncrypt = async () => {
    const response = await useFetch("/api/aes/encrypt", {
        method: "post",
        body: { message : message.value, key: aesKey.value }
    })
    if(response.data) {
        encrypted.value = response.data?.value as string
    }
}
const handleDecrypt = async () => {
    const response = await useFetch("/api/aes/decrypt", {
        method: "post",
        body: { message : message.value, key: aesKey.value }
    })
    if(response.data) {
        decrypted.value = response.data?.value as string
    }
}

const hashResult = ref<string>()
const hashSource = ref<string>("");
const handleHMAC = async () => {
  const { data } = await useFetch("/api/hmac/hash", {
    method: "post",
    body: {message: hashSource, key: aesKey},
  });

  if (data.value) {
    hashResult.value = data.value;
  }
};

const publicKey = ref<string>()
const privateKey = ref<string>()
const handleGenerateRsa = async () => {
    const { data } = await useFetch("/api/rsa/generateRSA");

    publicKey.value = data.value?.publicKey
    privateKey.value = data.value?.privateKey
}

//public key for encrypt, private key for decrypt
const encryptSourceRSA = ref<string>("")
const encryptResultRSA = ref<string>("")
const handleEncryptRSA = async () => {
    const { data } = useFetch("/api/rsa/encryptRSA", {
        method: "post",
        body: { message: encryptSourceRSA.value, secretKey: publicKey.value }
    })

    if(data.value)
        encryptResultRSA.value = data?.value
}

const decryptResultRSA = ref<string>("")
const handleDecryptRSA = async () => {
    const { data } = useFetch("/api/rsa/decryptRSA", {
        method: "post",
        body: { message: encryptResultRSA.value, secretKey: privateKey.value }
    })

    if(data.value)
        decryptResultRSA.value = data?.value
}
</script>
<template>
    <p class="text-sky-500">message for aes</p>
    <textarea v-model="message" />
     <p class="text-sky-500">message for hash</p>
    <textarea v-model="hashSource" />
    <p class="text-sky-500">message for RSA</p>
    <textarea v-model="encryptSourceRSA" />
    <p class="text-sky-500">key input</p>
    <input v-model="aesKey" />

    <button @click="handleEncrypt">encrypt</button>
    <button @click="handleDecrypt">decrypt</button>
    <button @click="handleGenerateRsa">generate RSA key</button>
    <button @click="handleHMAC">sign</button>
    <button @click="handleEncryptRSA">encrypt RSA</button>
    <button @click="handleDecryptRSA">decrypt RSA</button>
    <pre>encrypted : {{ encrypted }}</pre>
    <pre>decrypted : {{ decrypted }}</pre>
    <pre>hash : {{ hashResult }}</pre>
    <pre>publicKey : {{ publicKey }}</pre>
    <pre>privateKey : {{ privateKey }}</pre>
    <pre>encrypt RSA : {{ encryptResultRSA }}</pre>
    <pre>decrypt RSA : {{ decryptResultRSA }}</pre>
</template>
