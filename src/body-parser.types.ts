// 🧬 JSON primitive value
export type JsonPrimitive = string | number | boolean | null;

// 🧬 JSON value (Recursive)
export type JsonValue =
  | JsonPrimitive
  | JsonValue[]
  | { [key: string]: JsonValue };

// 🧬 Parsed JSON body
export type ParsedJsonBody = Record<string, JsonValue>;

// 🧬 FormData value
export type FormDataValue =
  | JsonValue
  | Blob
  | File
  | ArrayBuffer
  | (JsonValue | Blob | File | ArrayBuffer)[];

// 🧬 Parsed FormData body
export type ParsedFormDataBody = Record<string, FormDataValue>;
