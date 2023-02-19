<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Notification from './components/Notification.vue';

import { NOTIFICATION } from './type';

const message = ref<string>('hello world');

const clearNotification = () => {
  message.value = '';
};

</script>

<template>
  <div class="wrapper">
    <Notification 
      :type="NOTIFICATION.SUCCESS"
      :message="message"
      @clear-notification="clearNotification"
    />
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>