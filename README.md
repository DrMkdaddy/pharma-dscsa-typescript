# FDA DSCSA & EU FMD Drug Serialization API (21 USC 360eee) — TypeScript / JavaScript Client

[![npm version](https://img.shields.io/npm/v/@noor-mkdad/pharma-dscsa-client.svg)](https://www.npmjs.com/package/@noor-mkdad/pharma-dscsa-client)
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/57865358-8bafe64c-1441-4fe3-ba7a-2d60bdeb7dc5)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![RapidAPI Listing](https://img.shields.io/badge/RapidAPI-Dedicated%20Listing-blueviolet)](https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/fda-dscsa-eu-fmd-drug-serialization-api-21-usc-360eee)

Official zero-dependency, ultra-lightweight Node.js & browser client for **FDA DSCSA & EU FMD Drug Serialization API (21 USC 360eee)**.

> Instant <5ms US FDA DSCSA 4-element & EU FMD 2011/62/EU 2D DataMatrix barcode parser, Modulo-10 check digit validator, NDC-to-GTIN converter, and GS1 VRS engine on Cloudflare Workers edge.

> 🔑 **Get your Dedicated API Key:** [Subscribe to FDA DSCSA & EU FMD Drug Serialization API (21 USC 360eee) on RapidAPI](https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/fda-dscsa-eu-fmd-drug-serialization-api-21-usc-360eee)

---

## 🚀 Installation

```bash
npm install @noor-mkdad/pharma-dscsa-client
# or
pnpm add @noor-mkdad/pharma-dscsa-client
# or
yarn add @noor-mkdad/pharma-dscsa-client
```

---

## ⚡ Quickstart

```typescript
import { PharmaDscsaClient } from '@noor-mkdad/pharma-dscsa-client';

// Pass your RapidAPI key for authenticated edge access
const client = new PharmaDscsaClient({
  apiKey: process.env.RAPIDAPI_KEY // Get key from https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/fda-dscsa-eu-fmd-drug-serialization-api-21-usc-360eee
});

async function run() {
  const result = await client.validate({
    // Enter validation payload
  });

  if (result.success) {
    console.log('Result:', result.data);
  } else {
    console.error('Error:', result.error);
  }
}

run();
```

---

## 📚 API Reference

### `new PharmaDscsaClient(config)`
- `config.apiKey` *(optional)*: RapidAPI Key (`x-rapidapi-key`).
- `config.baseUrl` *(optional)*: Direct edge worker override URL.

### `client.validate(payload)`
Dispatches standard validation / parse request with sub-5ms latency.

### `client.getHealth()`
Checks edge isolate health and responsiveness.

---

## 🔗 Links
- 📖 [RapidAPI Documentation & Key](https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/fda-dscsa-eu-fmd-drug-serialization-api-21-usc-360eee)

## 📄 License
MIT © Noor Mkdad
