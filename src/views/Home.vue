<template>
  <h1 class="text-gray-600">{{ articles }}</h1>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import http from '@/http'

const articles = ref([])
onMounted(() => {
  http.get('/articles', (status, data) => {
    if (status) articles.value = data
    else alert(data)
  })
})

</script>
