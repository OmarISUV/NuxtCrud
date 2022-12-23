<template>
  <header class="bg-indigo-600">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
        <div class="w-full text-2xl text-white text-center">
          Sistema Para Prueba Tecnica
        </div>
        
      </div>
      <div class="flex flex-wrap justify-center space-x-6 py-4 ">
        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">| {{ link.name }} |</a> 
         
      </div>
    </nav>
  </header>
</template>

<script setup>
const navigation = [
  { name: 'CRUD de Usuarios', href: '/users' },
  { name: 'Ordenamiento Burbuja', href: '/bubble-sort' },
  { name: 'Palíndromo', href: '/palindrome' },
]
</script>