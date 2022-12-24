<script setup>

  const props = defineProps({
    item: Object,
    active: Boolean
  });

  /*-----------------------------------------
   * SETUP SCRIPT
   *-----------------------------------------*/
  import { XCircleIcon } from '@heroicons/vue/solid';

  import { useUsers } from '@/stores/stores';
  const users = useUsers();

</script>

<template>
  <div>
    <a
      @click=" users.delete(item.uuid)"
      :class="[
        active ? 'bg-gray-100 text-main-darker' : 'text-gray-700',
        'group flex items-center px-4 py-2 text-sm',
      ]">
      <XCircleIcon
        class="mr-3 h-5 w-5 text-red-400 group-hover:text-gray-500"
        aria-hidden="true" />
      Eliminar
    </a>

  </div>
</template>

