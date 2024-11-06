/**
 * Returns a promise that resolves with the given response after a specified delay.
 *
 * @template T - The type of the response value. Defaults to undefined.
 * @param {number} ms - The delay in milliseconds before the promise should resolve.
 * @param {T} response - The value with which the promise should be resolved.
 * @returns {Promise<T>} A promise that resolves with the given response after the specified delay.
 *
 * @example
 * await delay(1000, 'Hello World'); // Waits 1 second then logs 'Hello World'
 */
export function delay<T = void>(ms: number, response?: T): Promise<T | void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response);
    }, ms);
  });
}