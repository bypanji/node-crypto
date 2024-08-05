<script lang="ts">
import { ref } from 'vue';

const source = ref<string>("")
const handleEncrypt = async () => {
    const result = await useFetch("/api/encryptAES", {
        method: "post",
        body: source.value
    })

    console.log("ini result", result);
}
</script>
<template>
    <textarea v-model="source" />
    <button @click="handleEncrypt" />
    <pre></pre>
</template>
