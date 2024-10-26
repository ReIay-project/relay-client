import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useExampleStore = defineStore('example-store', () => {
  const counter = ref(0);

  function add() {
    counter.value++;
  }

  return {
    counter,
    add
  };
});