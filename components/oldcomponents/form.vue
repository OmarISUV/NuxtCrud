<template>
  <form class="space-y-6" action="#" method="POST">
    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">User Information</h3>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium text-gray-700">Phone</label>
              <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div class="col-span-6 sm:col-span-4">
              <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
              <input type="text" name="email-address" id="email-address" autocomplete="email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button type="button"
        class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
      <button type="submit"
        class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
    </div>
  </form>
</template>
  