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
const sign = async () => {
    const response = await useFetch("/api/hmac/hash", {
        method: "post",
        body: { message : message.value, key: aesKey.value }
    })
    if(response.data) {
        encrypted.value = response.data?.value as string
    }
}
</script>
<template>
    <textarea v-model="message" />
    <input v-model="aesKey" />
    <button @click="handleEncrypt">encrypt</button>
    <button @click="handleDecrypt">decrypt</button>
    <pre>{{ encrypted }}</pre>
    <pre>{{ decrypted }}</pre>
</template>
