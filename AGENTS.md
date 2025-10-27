# Agent Guidelines for grab-random

## Commands
- **Build**: `bun run build` (uses tsdown for TypeScript compilation)
- **Install**: `bun install`
- **Run**: `bun run index.ts`

## Code Style
- **Language**: TypeScript with strict mode enabled
- **Imports**: Use ES modules with explicit file extensions when needed
- **Types**: Always use explicit type annotations, prefer generics for reusable functions
- **Naming**: camelCase for functions/variables, PascalCase for types/interfaces
- **Error Handling**: Throw Error objects with descriptive messages for invalid arguments
- **Documentation**: Use JSDoc with @template, @param, @returns, @example tags
- **Formatting**: Use semicolons, 2-space indentation, single quotes for strings
- **Best Practices**: Enable strict TypeScript checks, avoid any types, validate function arguments