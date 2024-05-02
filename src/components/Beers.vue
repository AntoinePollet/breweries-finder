<template>
  <div class="p-4">
    <div v-if="beers?.length > 0" class="grid grid-cols-3 gap-6 p-4">
      <Beer v-for="beer in beers" :beer="beer"/>
    </div>
    <div v-else>
      No breweries found ...
    </div>
  </div>
</template>

<script setup lang="ts">
import Beer from '@/components/Beer.vue';
import { useBeerStore } from '@/stores/beer';
import { storeToRefs } from 'pinia';

const { beers } = storeToRefs(useBeerStore());

</script>