<script setup>
  import { useUsers } from '@/stores/stores';
  const users = useUsers();
  users.reloadTable();
</script>

<template>
  <div>
    <!-- Name Input -->
    <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 ">Nombre</label>
        <div class="mt-1">
          <input v-model="users.dataForm.name" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
        </div>
    </div>

    <!-- Email Input -->
    <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 ">Email</label>
        <div class="mt-1">
          <input v-model="users.dataForm.email" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
        </div>
    </div>


    <!-- Phone Input -->
    <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 ">Teléfono</label>
        <div class="mt-1">
          <input v-model="users.dataForm.phone" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
        </div>
    </div>


    <slot />
  </div>
</template>

