import Database from "@replit/database";

/**
 * DB class for interacting with Replit Database
 * @class
 * @implements {Ezdb}
 */
class ReplitStore {
  /**
   * Creates an instance of ReplitStore
   */
  constructor() {
    this.db = new Database();
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
      const result = await this.db.set(key, value);
      if (!result.ok) {
        throw new Error(result.error);
      }
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
      const result = await this.db.get(key);
      if (!result.ok) {
        throw new Error(result.error);
      }
      return result.value;
    } catch (error) {
      console.error("Error getting value:", error);
      throw error;
    }
  }
}

export default ReplitStore;
