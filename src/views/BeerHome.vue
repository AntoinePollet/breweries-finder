<template>
  <div class="flex flex-1 flex-col">
    <Filters />

    <div class="flex flex-1 overflow-auto">
      <div v-if="isLoading" class="flex flex-1 justify-center items-center">
        <span class="loading loading-ring loading-lg"></span>
      </div>
  
      <div v-else class="flex flex-1">
        <Beers class="flex-1" />
      </div>
    </div>

    <Pagination />
  </div>
</template>

<script setup lang="ts">
import Beers from '@/components/Beers.vue';
import Filters from '@/components/Filters.vue';
import Pagination from '@/components/Pagination.vue';
import { useBeerStore } from '@/stores/beer';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const  { fetchBeers, fetchBreweriesCount } = useBeerStore();
const { isLoading } = storeToRefs(useBeerStore());

onMounted(async () => {
  fetchBreweriesCount();
  isLoading.value = true;
  await fetchBeers();
  isLoading.value = false;
});
</script>