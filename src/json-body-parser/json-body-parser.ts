import type { JsonValue, ParsedJsonBody } from "../body-parser.types";
import { EMPTY_OBJECT, safeJsonParse } from "../helper/safe-json-parse.helper";

/**
 * ⭐ JSON body parser
 */
export default class JsonBodyParser {
  /**
   * ⚡ Parse JSON body
   */
  static parseJsonBody(body: object): ParsedJsonBody {
    // Convert each entry in the object
    const parsedJsonBody = this.parseEntries(body as Record<string, unknown>);

    // ✨
    return parsedJsonBody;
  }

  /**
   * ⚡ Parse entries
   */
  private static parseEntries(body: Record<string, unknown>): ParsedJsonBody {
    return Object.entries(body).reduce<ParsedJsonBody>(
      (parsedJson, [key, value]) => {
        parsedJson[key] = this.convertJsonValue(value); // Convert each entry
        return parsedJson;
      },
      {}
    );
  }

  /**
   * ⚡️ Convert JSON value
   */
  static convertJsonValue(value: unknown): JsonValue {
    if (typeof value === "string") {
      // Try to parse the string as JSON
      const parsed = safeJsonParse({ value, fallbackValue: EMPTY_OBJECT });

      // Check if parsed result is a non-empty object or array
      if (
        parsed !== null &&
        (Array.isArray(parsed) ||
          (typeof parsed === "object" && Object.keys(parsed).length > 0))
      ) {
        return this.convertJsonValue(parsed);
      }

      // Return the string if it's not a valid JSON
      return value;
    }

    return value as JsonValue;
  }
}
