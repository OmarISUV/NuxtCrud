<script setup>
  const props = defineProps({
    item: Object,
  });

  /*-----------------------------------------
   * SETUP SCRIPT
   *-----------------------------------------*/
  import { PencilAltIcon, XCircleIcon } from '@heroicons/vue/solid';
  
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/solid';

  // import { useRbk } from '@/stores/stores';
  // const rbk = useRbk();

  import { useUsers} from '@/stores/stores';

  const users = useUsers()
  
  const openEdit = (item) => {
    users.reloadDataForm(item);
    users.modalUpdate = true
  }

</script>

<template>
<div>

  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        Options
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
              <a
              @click="
                openEdit(item)
              "
              :class="[
                active ? 'bg-gray-100 text-main-darker' : 'text-gray-700',
                'group flex items-center px-4 py-2 text-sm',
              ]">
              <PencilAltIcon
                class="mr-3 h-5 w-5 text-main-gray group-hover:text-gray-500"
                aria-hidden="true" />
              Editar
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <UsersActionsDelete :item="item" :active="active" />
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</div>
</template>
