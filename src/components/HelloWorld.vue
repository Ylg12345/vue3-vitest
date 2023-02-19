<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const addCount = () => {
  count.value++;
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="addCount">count is: {{ count }}</button>
  </div>
</template>