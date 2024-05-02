<template>
    <div class="flex flex-wrap justify-center gap-3">

      <label class="input input-md ring-none input-bordered flex items-center gap-2 w-64">
        <input v-model="search" @input="searchBeer" type="text" class="grow" placeholder="Search beer by name..."/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
      </label>

      <div class="dropdown dropdown-end dropdown-bottom">
        <div tabindex="0" role="button" class="btn">Per page : {{ perPage }}</div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="item in perPageItems" @click="setPageItems(item)"><a>{{ item }}</a></li>
        </ul>
      </div>

      <div class="dropdown dropdown-end dropdown-bottom">
        <div tabindex="0" role="button" class="btn">Sorted by : {{ sortBy }}</div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="item in sortedBy" @click="setSortedBy(item)"><a>{{ item }}</a></li>
        </ul>
      </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBeerStore } from '@/stores/beer';
import { storeToRefs } from 'pinia';
import type { SortDirection } from '@/interfaces';

const { perPage, sortBy } = storeToRefs(useBeerStore());
const { setPageItems, setSortedBy, setSearch } = useBeerStore();

const search = ref<string>('');

const perPageItems = [10, 25, 50, 100, 200];
const sortedBy: SortDirection[] = ['asc', 'desc'];

let searchBeerTimerId: number | null = null;

const searchBeer = () => {
  if (searchBeerTimerId) {
    clearTimeout(searchBeerTimerId);
  }

  searchBeerTimerId = setTimeout(async () => {
    setSearch(search.value);
    searchBeerTimerId = null;
  }, 300);
}

</script>