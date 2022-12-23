import { defineStore }  from 'pinia';
import { Users }        from '@/stores/cruds/users.js';
import { BubbleSort }   from '@/stores/functions/bubble-sort.js';
import { Palindrome }   from '@/stores/functions/palindrome.js';

export const useUsers       = defineStore('users',      Users);
export const useBubbleSort  = defineStore('bubbleSort', BubbleSort);
export const usePalindrome  = defineStore('palindrome', Palindrome);
