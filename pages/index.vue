<script lang="ts" setup>
const message = ref<string>("")
const aesKey = ref<string>("")
const result = ref<string>("")
const handleEncrypt = async () => {
    const response = await useFetch("/api/encryptAES", {
        method: "post",
        body: { message : message.value, key: aesKey.value }
    })
    if(response.data) {
        result.value = response.data?.value as string
    }
}
</script>
<template>
    <textarea v-model="message" />
    <input v-model="aesKey" />
    <button @click="handleEncrypt">encrypt</button>
    <pre>{{ result }}</pre>
</template>
