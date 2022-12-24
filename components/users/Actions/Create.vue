<script setup>
  import { useUsers} from '@/stores/stores';
  // import { useUsers, useRbk } from '@/stores/stores';

  const users = useUsers();
  // const rbk = useRbk();
  const props = defineProps({
    title: {
      type: String,
      default: 'Editar Usuario',
    },
    localProps: Object,
  });

  users.reloadDataForm(null);

</script>

<template>
  <div class="component p-2">
   
      <h1 class="text-left text-2xl font-black my-2">{{ title }}</h1>
      <UsersForm>

        <div>
            <button @click="users.create()" type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Guardar</button>
        </div>

      </UsersForm>
  </div>
</template>
