<script setup>
  import { useUsers } from '@/stores/stores';
  import { ref } from 'vue';
  const users = useUsers();

  const changePage = (val) => {
    users.$state.table.paga = val;
    users.reloadTable();
  };

  const getPageSearch = (text = null) => {
    users.$state.table.paga = 1;
    users.$state.filters.search = text;
    users.reloadTable();
  };


  
</script>

<template>
  <div>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-main-darker font-text">
          Usuarios
        </h1>
        <p class="mt-2 text-sm text-gray-700 font-text">
          Busque por email 
        </p>
      </div>

      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          class="bg-blue-500 inline-flex items-center justify-center rounded-md border border-transparent bg-main-light px-4 py-2 text-sm font-text text-white shadow-sm hover:bg-main-light focus:outline-none focus:ring-2 focus:ring-main-light focus:ring-offset-2 sm:w-auto"
          @click="users.modalCreate = true"
          >
          Registrar Integrante
        </button>
      </div>
    </div>

    <div class="my-8">
      <UtilsSearchBar
        class="m-1 lg:max-w-3xl lg:mx-auto"
        @search="getPageSearch"
        @delete-search="getPageSearch" />
    </div>

    <UsersTableList />

    <div v-if="users.modalCreate">
      <UtilsModal @close-component="users.modalCreate = false">
        <UsersActionsCreate/>
      </UtilsModal>
    </div>

    <div v-if="users.modalUpdate">
      <UtilsModal @close-component="users.modalUpdate = false">
        <UsersActionsUpdate/>
      </UtilsModal>
    </div>

  </div>
</template>
