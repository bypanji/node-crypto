<script lang="ts" setup>
import { ref } from 'vue';

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
const hashSource = "testing string for hash";
const handleHMAC = async () => {
  const { data } = await useFetch("/api/hmac/hash", {
    method: "post",
    body: hashSource,
  });

  if (data.value) {
    hashResult.value = data.value;
  }
};

const publicKey = ref<string>()
const privateKey = ref<string>()
const generateRsa = async () => {
    const { data } = await useFetch("/api/rsa/generateRSA");

    publicKey.value = data.value?.publicKey
    privateKey.value = data.value?.privateKey
}
</script>
<template>
    <p class="text-sky-500">heheheheh</p>
    <textarea v-model="message" />
    <input v-model="aesKey" />
    <button @click="handleEncrypt">encrypt</button>
    <button @click="handleDecrypt">decrypt</button>
    <button @click="generateRsa">generate RSA key</button>
    <button @click="handleHMAC">sign</button>
    <pre>encrypted : {{ encrypted }}</pre>
    <pre>decrypted : {{ decrypted }}</pre>
    <pre>hash : {{ hashResult }}</pre>
    <pre>publicKey : {{ publicKey }}</pre>
    <pre>privateKey : {{ privateKey }}</pre>
</template>
