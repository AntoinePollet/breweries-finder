<template>
  <div class="h-16 shadow-sm flex items-center justify-center">
    <div class="flex items-center gap-2">
      <img :src="beer" alt="Beer Icon" height="32" class="h-8">
      <div>
        Breweries finder
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import beer from '@/assets/beer.svg'
</script>