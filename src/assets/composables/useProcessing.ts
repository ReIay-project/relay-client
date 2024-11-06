import { ref } from 'vue';

/**
 * useProcessing is a composable that provides a reactive variable and a function to manipulate it.
 * The variable, isProcessing, indicates whether a process is ongoing.
 * The function, start, sets isProcessing to true for a specified duration (in milliseconds), then sets it back to false.
 *
 * @example
 * const { isProcessing, start } = useProcessing();
 * start(2000); // Sets isProcessing to true for 2 seconds
 **/
export function useProcessing() {
  const isProcessing = ref(false);

  function start(ms: number = 2000) {
    isProcessing.value = true;
    setTimeout(() => {
      isProcessing.value = false;
    }, ms);
  }

  return {
    isProcessing,
    start
  };
}