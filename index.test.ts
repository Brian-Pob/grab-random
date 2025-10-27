import { describe, expect, it } from "bun:test";
import { grabRandom } from "./index.ts";

describe("grabRandom", () => {
  describe("happy path", () => {
    it("should return an array with four elements", () => {
      const result = grabRandom([1, 2, 3, 4, 5]);
      if (!Array.isArray(result) || result.length !== 2) {
        throw new Error("Result is not an array with four elements");
      }
    });

    it("should return the selected item as the first element", () => {
      const items = [1, 2, 3, 4, 5];
      const [item] = grabRandom(items);
      if (!items.includes(item)) {
        throw new Error("Selected item is not from the original array");
      }
    });

    it("should return the remaining items as the second element", () => {
      const items = [1, 2, 3, 4, 5];
      const [, remaining] = grabRandom(items);
      if (!Array.isArray(remaining) || remaining.length !== 4) {
        throw new Error("Remaining items are not an array with four elements");
      }
    });

    it("should return the remaining items without the selected item", () => {
      const items = [1, 2, 3, 4, 5];
      const [item, remaining] = grabRandom(items);
      if (remaining.includes(item)) {
        throw new Error("Remaining items contain the selected item");
      }
    });

    it("should return the remaining items as an array", () => {
      const items = [1, 2, 3, 4, 5];
      const [, remaining] = grabRandom(items);
      if (!Array.isArray(remaining)) {
        throw new Error("Remaining items are not an array");
      }
    });

    it("should not mutate the original array", () => {
      const items = [1, 2, 3, 4, 5];
      const itemsCopy = [...items];
      grabRandom(items);
      if (JSON.stringify(items) !== JSON.stringify(itemsCopy)) {
        throw new Error("Original array was mutated");
      }
    });

  })

  describe("bad path", () => {
    const ErrorMsg = {
      IS_NULL: "Invalid argument: 'items' cannot be null or undefined",
      IS_NOT_ARRAY: "Invalid argument: 'items' is not an array",
      IS_EMPTY: "Invalid argument: 'items' cannot be empty",
    }

    it("should throw an error if item is empty", () => {
      expect(() => { grabRandom([]) }).toThrow(ErrorMsg.IS_EMPTY)

    })

    it("should throw an error if item is null", () => {
      // @ts-expect-error
      expect(() => { grabRandom() }).toThrow(ErrorMsg.IS_NULL)

    })

    it("should throw an error if item is not an array", () => {
      // @ts-expect-error
      expect(() => { grabRandom(8) }).toThrow(ErrorMsg.IS_NOT_ARRAY)

    })
  })


});
