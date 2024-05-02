<script setup lang="ts">
import Header from '@views/Header.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="h-screen w-screen overflow-hidden">
    <Header></Header>
    <div class="p-4 overflow-auto flex flex-1" style="height: calc(100vh - 64px);">
      <router-view />
    </div>
  </div>
</template>

<style scoped>

</style>
