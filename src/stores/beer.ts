import { defineStore } from "pinia"
import { Beer, Query } from "@/interfaces"
import client from "@/http"
import { computed, reactive, ref } from "vue"

export const useBeerStore = defineStore("beer", () => {

  const beers = ref<Beer[]>([]);

  const query: Query = reactive({
    by_name: '',
    autocomplete: '',
    page: 1,
    per_page: 10,
    sort: 'type,name:desc'
  });

  const breweriesCount = ref<number | undefined>();

  const isLoading = ref<boolean>(false);

  const perPage = computed(() => query.per_page);
  const sortBy = computed(() => {
    return query.sort?.split(':')[1] || 'desc';  
  });
  const page = computed(() => query.page);
  const canGoToNextPage = computed(() => {
    return page.value < Math.ceil(breweriesCount.value! / perPage.value!)
  });
  const canGoToFiveNextPage = computed(() => {
    return page.value + 5 < Math.ceil(breweriesCount.value! / perPage.value!)
  });

  const setPageItems = async (items: number) => {
    query.per_page = items;
    isLoading.value = true;
    await fetchBeers();
    isLoading.value = false;
  }

  const setPage = async (page: number) => {
    query.page = page;
    isLoading.value = true;
    await fetchBeers();
    isLoading.value = false;
  }
  

  const setSortedBy = async (by: 'asc' | 'desc') => {
    query.sort = 'type,name:' + by;
    isLoading.value = true;
    await fetchBeers();
    isLoading.value = false;  }

  const setSearch = async (search: string) => {
    query.by_name = search;
    isLoading.value = true;
    await fetchBeers();
    isLoading.value = false;  }

  const fetchBeers = async () => {
    const { data } = await client.get<Beer[]>('', { params: query });
    beers.value = data
  }

  const fetchBreweriesCount = async () => {
    const { data } = await client.get('meta');
    breweriesCount.value = data.total
  }

  return { 
    beers,
    perPage, 
    sortBy,
    page,
    isLoading,
    breweriesCount,
    canGoToNextPage,
    canGoToFiveNextPage,
    setPageItems,
    setPage,
    setSortedBy,
    setSearch,
    fetchBeers,
    fetchBreweriesCount
  }
})