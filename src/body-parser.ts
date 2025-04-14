import FormDataBodyParser from "./form-data-body-parser/form-data-body-parser";
import JsonBodyParser from "./json-body-parser/json-body-parser";

/**
 * ⭐ Body parser (For next.js api request)
 */
export default class BodyParser {
  /**
   * ⚡ Parse request body
   */
  static parse(requestBody: FormData | object) {
    // FormData
    if (requestBody instanceof FormData) {
      return FormDataBodyParser.parseFormDataBody(requestBody);
    }

    // JSON
    else if (
      typeof requestBody === "object" &&
      requestBody !== null &&
      !Array.isArray(requestBody)
    ) {
      return JsonBodyParser.parseJsonBody(requestBody);
    }

    // 🚨 Error handling
    throw new Error("Invalid request body format");
  }
}
