<script setup>
  import { usePalindrome } from '@/stores/stores';
  // import { ref } from 'vue';
  const palindrome = usePalindrome();

  const setPalindrome = (val) => {
    palindrome.checkPalindrome(val);
  };

  const clean = (text = null) => {
    palindrome.$state.palindrome = '';
  };

</script>

<template>
  <div class="my-8 text-center">
    <div class="text-2xl">
      Palindromos
    </div>
    <UtilsSearchBar
      class="m-1 lg:max-w-3xl lg:mx-auto"
      @search="setPalindrome"
      @delete-search="clean" />
      <h1>Ejemplo: <b> A man, a plan, a canal – Panama! </b>  es un palindromo</h1>
  </div>
</template>
  