<template>
  <div class="flex flex-col w-full min-h-screen bg-green-50">
    <LayoutHeader/>
    <main class="flex-grow w-full h-full p-4 mx-auto max-w-7xl">
      <slot />
    </main>
    <footer class="flex items-center justify-center w-full h-16 text-black">
      <p class="text-gray-700">
        My Nuxt App &copy; {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>