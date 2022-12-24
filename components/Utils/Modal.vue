<script setup>
  /*-----------------------------------------
   * SETUP SCRIPT
   *-----------------------------------------*/
  import {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue';
  import { XIcon } from '@heroicons/vue/outline';
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="true" class="modal-backtop">
      <Dialog
        as="div"
        class="fixed z-20 inset-0 overflow-y-auto"
        @close="open = false">
        <div
          class="flex justify-center min-h-screen text-center md:block md:px-2 lg:px-4"
          style="font-size: 0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0">
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="inline-block align-middle h-screen" aria-hidden="true"
            >&#8203;</span
          >

          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enter-to="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 md:scale-100"
            leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
            <div
              class="flex text-base text-left transform transition w-full max-w-2xl px-4 my-8 mx-2 align-middle md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div
                class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 dark:bg-white">
                <button
                  type="button"
                  class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  @click="open = false">
                  <span class="sr-only">Close</span>
                  <XIcon
                    class="h-6 w-6"
                    aria-hidden="true"
                    @click="$emit('close-component')" />
                </button>

                <div
                  class="w-full items-start grid grid-cols-1 gap-y-8 gap-x-6 pt-8">
                  <slot />
                </div>
              </div>
            </div>
          </TransitionChild>
          <!-- <el-backtop target=".modal-backtop" /> -->
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<style>
  modal-backtop {
    width: auto;
  }
</style>
