import { kv } from "@vercel/kv";

/**
 * DB class for interacting with Vercel KV Database
 * @class
 * @implements {Ezdb}
 */
class VercelStore {
  /**
   * Creates an instance of VercelStore
   */
  constructor() {
    // No need to initialize anything as kv is globally available
  }

  /**
   * Sets a value in the database
   * @param {string} key - The key to set
   * @param {any} value - The value to set
   * @returns {Promise<void>}
   * @throws {Error} If there's an error setting the value
   */
  async set(key, value) {
    try {
      await kv.set(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting value:", error);
      throw error;
    }
  }

  /**
   * Gets a value from the database
   * @param {string} key - The key to get
   * @returns {Promise<any>} The value associated with the key
   * @throws {Error} If there's an error getting the value
   */
  async get(key) {
    try {
      const result = await kv.get(key);
      return result !== null ? JSON.parse(result) : null;
    } catch (error) {
      console.error("Error getting value:", error);
      throw error;
    }
  }
}

export default VercelStore;
