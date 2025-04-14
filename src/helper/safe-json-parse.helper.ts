// 🧬
type SafeJsonParseParams = {
  value: string;
  fallbackValue?: unknown;
};

// 📐 Empty object (For fallback use)
export const EMPTY_OBJECT = {};
// 📐 Empty array (For fallback use)
export const EMPTY_ARRAY = [];

/**
 * ⚡ Safe json parse (No error message)
 */
export const safeJsonParse = ({
  value,
  fallbackValue = null,
}: SafeJsonParseParams): unknown => {
  try {
    // ✨
    return JSON.parse(value);

    // 🚨 Error handling
  } catch {
    return fallbackValue;
  }
};
