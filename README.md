# grab-random

[![npm version](https://badge.fury.io/js/%40brian-pob%2Fgrab-random.svg)](https://badge.fury.io/js/%40brian-pob%2Fgrab-random)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript utility for selecting a random element from an array and returning both the selected element and the remaining array.

## Installation

```bash
bun add @brian-pob/grab-random
```

## Usage

```typescript
import { grabRandom } from '@brian-pob/grab-random'

const numbers = [1, 2, 3, 4, 5]
const [randomItem, remainingItems] = grabRandom(numbers)

console.log(randomItem)      // e.g., 3
console.log(remainingItems)  // e.g., [1, 2, 4, 5]
```

## API

### `grabRandom<T>(items: T[]): [T, T[]]`

Selects a random item from an array and returns it along with the remaining items.

#### Parameters

- `items` (T[]): The array from which to select a random item

#### Returns

A tuple containing:
- The randomly selected item (T)
- The remaining items array (T[])

#### Throws

- `Error` if `items` is null or undefined
- `Error` if `items` is not an array
- `Error` if `items` is empty

#### Type Parameters

- `T`: The type of items in the array

## Development

### Prerequisites

- Node.js ^24.0.0
- Bun (recommended)

### Setup

```bash
bun install
```

### Build

```bash
bun run build
```

### Run

```bash
bun run index.ts
```

## License

MIT © [Brian Poblete](https://brianmp.dev)
