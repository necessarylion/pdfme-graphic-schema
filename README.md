# pdfme-graphic-schema

A TypeScript package that supports both browser and Node.js environments.

## Installation

```bash
yarn add pdfme-graphic-schema
```

## Usage

### In Node.js (CommonJS)

```javascript
import { image } from 'pdfme-graphic-schema'

const viewer = new Viewer({
  domContainer: domContainer,
  ...
  plugins: {
    text,
    image, // use image plugin
  },
})
```
