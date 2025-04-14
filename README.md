# next-body-parser

A lightweight and type-safe body parser for **Next.js API routes** (App Router).

> This library is built on top of Next.js, providing an enhanced and unified solution for parsing both JSON and FormData in Next.js API routes.
> It complements the built-in Next.js body parsing capabilities, especially for FormData handling,
> which is not natively supported by Next.js.

## Features

- ✨ Supports both `JSON` and `FormData`
- ✅ Type-safe and modular
- 🪶 Tiny and dependency-free

## Installation

```bash
npm install next-body-parser
```

## Usage

#### With JSON

```javascript
import { BodyParser } from "next-body-parser";

export async function POST(request: NextRequest) {
    const json = await request.json();
    const payload = BodyParser.parse(json)
  ...
}
```

#### With FormData

```javascript
import { BodyParser } from "next-body-parser";

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const payload = BodyParser.parse(formData)
  ...
}
```
