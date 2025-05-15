# pdfme-graphic-schema

pdfme-graphic-schema is a package that provides a schema for defining and rendering graphics (image, svg, pdf) in PDF documents using the pdfme library.

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
