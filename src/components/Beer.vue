<template>
  <div class="flex rounded-md shadow-md p-2">
    <div class="flex flex-1 flex-col">
      <div class="flex justify-between">
        <div class="font-bold">{{ beer.name }}</div>
        <div>
          <div v-if="beer.website_url" class="tooltip tooltip-accent" data-tip="website url">
            <button class="btn btn-ghost btn-circle btn-sm" @click="goToShopWebsite">
              <font-awesome-icon :icon="faShop" class="cursor-pointer"/>
            </button>
          </div>
          <div v-if="beer.latitude && beer.longitude"  class="tooltip tooltip-accent" data-tip="google maps">
            <button class="btn btn-ghost btn-circle btn-sm" @click="goToMapsLocation">
              <font-awesome-icon :icon="faMap" class="cursor-pointer"/>
            </button>
          </div>
        </div>
      </div>
      <div class="">{{ beer.country }}</div>
      <div>
        Type :
        <div class="badge badge-secondary">{{ beer.brewery_type }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Beer } from '@/interfaces';
import { PropType, toRefs } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';

const props = defineProps({
  beer: {
    type: Object as PropType<Beer>,
    required: true
  }
});

const { beer } = toRefs(props);

const goToShopWebsite = () => {
  window.open(beer.value.website_url, '_blank');
}

const goToMapsLocation = () => {
  window.open(`https://maps.google.com/?q=${beer.value.latitude},${beer.value.longitude}`, '_blank');
}
</script>