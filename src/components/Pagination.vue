<template>
  <div class="flex justify-center">
    <div class="join">
      <button @click="setPage(page - 5)" :class="['join-item btn', page <= 5 ? 'btn-disabled' : '']">«</button>
      <button @click="setPage(page - 1)" :class="['join-item btn', page === 1 ? 'btn-disabled' : '']">‹</button>
      <button class="join-item btn btn-active">{{ page }}</button>
      <button @click="setPage(page + 1)" :class="['join-item btn', canGoToNextPage ? '' : 'btn-disabled']">›</button>
      <button @click="setPage(page + 5)" :class="['join-item btn', canGoToFiveNextPage ? '' : 'btn-disabled']">»</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBeerStore } from '@/stores/beer';
import { storeToRefs } from 'pinia';

const { page, canGoToNextPage, canGoToFiveNextPage } = storeToRefs(useBeerStore());
const { setPage } = useBeerStore();

</script>