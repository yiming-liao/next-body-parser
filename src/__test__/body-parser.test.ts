import { describe, it, expect } from "vitest";
import { BodyParser } from "../index";

describe("BodyParser", () => {
  it("should parse JSON body correctly", () => {
    const json = { name: "Yiming", age: 30 };
    const result = BodyParser.parse(json);
    expect(result).toEqual({ name: "Yiming", age: 30 });
  });

  it("should parse FormData body correctly", () => {
    const formData = new FormData();
    formData.append("email", "test@example.com");
    formData.append("subscribe", "yes");

    const result = BodyParser.parse(formData);
    expect(result).toEqual({
      email: "test@example.com",
      subscribe: "yes",
    });
  });

  it("should throw error on invalid input (null)", () => {
    expect(() => BodyParser.parse(null as any)).toThrowError(
      "Invalid request body format"
    );
  });

  it("should throw error on invalid input (array)", () => {
    expect(() => BodyParser.parse([] as any)).toThrowError(
      "Invalid request body format"
    );
  });
});
