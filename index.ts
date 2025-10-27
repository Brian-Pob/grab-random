/**
 * Selects a random item from an array and returns it along with the remaining items.
 * @template T Type of items
 * @param {T[]} items The array from which to select a random item.
 * @returns {[T, T[]]} An array containing the randomly selected item and the remaining items.
 * @example 
 * //     4     [1, 2, 3, 5]
 * const [item, remainingItems] = grab([1, 2, 3, 4, 5]);
 */
export function grabRandom<T>(items: T[]): [T, T[]] {
  if (!items) throw Error("Invalid argument: 'items' cannot be null or undefined");
  if (!Array.isArray(items)) throw Error("Invalid argument: 'items' is not an array");
  if (items.length === 0) throw Error("Invalid argument: 'items' cannot be empty");

  const i = Math.floor(Math.random() * items.length);
  return [items[i] as T, items.slice(0, i).concat(items.slice(i + 1))];
}
