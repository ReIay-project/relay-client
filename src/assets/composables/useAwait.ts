import { Ref, ref } from 'vue';


type AsyncFunction = (...args: unknown[]) => Promise<unknown>
type FunctionMap = Record<string, AsyncFunction>

/**
 * useAwait is a composable that adds an `isAwait` flag while at least one of the promises is being resolved.
 * @version 1.0.0
 * @template T - A map of functions that return a promise.
 * @param {T} fns - An object where each property is a function that returns a promise.
 * @returns An object with the same shape as `fns`, but each function is wrapped to set `isAwait` to true before it's called and false after it resolves. Also includes the `isAwait` ref itself.
 *
 * @example
 * const { isAwait, myAsyncFn } = useAwait({ myAsyncFn: async () => { ... } });
 * await myAsyncFn();
 * console.log(isAwait.value); // false
 */
export function useAwait<T extends FunctionMap>(fns: T): { isAwait: Ref<boolean> } & T {
  const isAwait = ref(false);

  const wrappedFns: Partial<T> = {};
  for (const key in fns) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    wrappedFns[key as keyof T] = async (...args: unknown[]) => {
      try {
        isAwait.value = true;
        return await fns[key](...args);
      } finally {
        isAwait.value = false;
      }
    };
  }

  return {
    isAwait,
    ...(wrappedFns as T)
  };
}