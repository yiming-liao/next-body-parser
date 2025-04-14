import type { FormDataValue, ParsedFormDataBody } from "../body-parser.types";
import { safeJsonParse } from "../helper/safe-json-parse.helper";

/**
 * ⭐ FormData body parser
 */
export default class FormDataBodyParser {
  /**
   * ⚡ Parse FormData body
   */
  static parseFormDataBody(body: FormData): ParsedFormDataBody {
    const parsedFormDataBody = this.parseEachField(body);

    // ✨
    return parsedFormDataBody;
  }

  /**
   * ⚡ Parse each field
   */
  private static parseEachField(body: FormData): ParsedFormDataBody {
    const parsedFormData: ParsedFormDataBody = {};

    body.forEach((value, key) => {
      const parsedValue = this.convertFormDataValue(value);

      // Multiple same key => Turn into Array
      if (key in parsedFormData) {
        parsedFormData[key] = Array.isArray(parsedFormData[key])
          ? ([...parsedFormData[key], parsedValue] as FormDataValue)
          : ([parsedFormData[key], parsedValue] as FormDataValue);
      } else {
        parsedFormData[key] = parsedValue;
      }
    });

    // ✨
    return parsedFormData;
  }

  /**
   * ⚡️ Convert FormData value
   */
  static convertFormDataValue(value: unknown): FormDataValue {
    if (typeof value === "string") {
      // Try to parse the string as JSON
      const parsed = safeJsonParse({ value, fallbackValue: null });

      // Check if parsed result is a non-empty object or array
      if (
        parsed !== null &&
        (Array.isArray(parsed) ||
          (typeof parsed === "object" && Object.keys(parsed).length > 0))
      ) {
        return this.convertFormDataValue(parsed);
      }

      return value;
    }

    // Blob
    if (value instanceof File || value instanceof Blob) {
      return value;
    }

    return value as FormDataValue;
  }
}
