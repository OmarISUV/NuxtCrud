<script setup>
  import { ref } from 'vue';

  // Data
  const searchText = ref('');

  // Emit
  const emit = defineEmits(['search', 'delete-search']);

  // Methods
  function search() {
    emit('search', searchText.value);
  }

  function deleteSearch() {
    searchText.value = '';
    emit('delete-search');
  }
</script>

<template>
  <div id="search-bar" class="component flex">
    <!-- INPUT -->
    <input
      placeholder="Buscar..."
      class="w-full rounded-main shadow py-2 px-4 mb-1 focus:ring-2 focus:ring-main-light"
      v-model="searchText"
      @keypress.enter="search"/>

    <!-- SEARCH BUTTON-->
    <button class="component custom-btn mb- transform mx-auto ml-3"  @click="search" >
      <Icon name="fa:search" />
    </button>

    <!-- DELETE BUTTON -->
    <button class="component custom-btn mb- transform mx-auto ml-3"  @click="deleteSearch">
      <Icon name="fa:trash" />
    </button>
  </div>
</template>

