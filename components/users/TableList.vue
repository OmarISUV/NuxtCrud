<script setup>
  import { useUsers } from '@/stores/stores';
  const users = useUsers();
  await users.reloadTable();
</script>

<template>
  <div class="mt-8 flex flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div
          class="overflow-y-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  name
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell hidden">
                  Email
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell hidden">
                  Numero
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="item in users.table.data" :key="item.id">
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ item.name }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 md:table-cell hidden">
                  {{ item.email }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 md:table-cell hidden">
                  {{ item.phone }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 w-4">
                  <UsersActions :item="item" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

