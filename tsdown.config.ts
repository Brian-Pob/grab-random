import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./index.ts'],
  dts: {
    sourcemap: true
  }
})