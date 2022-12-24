<script setup>
  import { useBubbleSort } from '@/stores/stores';
  // import { ref } from 'vue';
  const bubbleSort = useBubbleSort();

  const setBubbleSort = (val) => {
    bubbleSort.bubbleSort(JSON.parse(val));
  };

  const clean = (text = null) => {
    bubbleSort.$state.bubbleSort = '';
  };

</script>

<template>
  <div class="my-8 text-center">
    <div class="text-2xl">
      Ordenamiento Burbuja
    </div>
    <UtilsSearchBar
      class="m-1 lg:max-w-3xl lg:mx-auto"
      @search="setBubbleSort"
      @delete-search="clean" />
    <h1>Ejemplo: <b> [1, 5, 2] </b>  es un palindromo</h1>
  </div>
</template>
  