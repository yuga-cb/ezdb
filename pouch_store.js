import PouchDB from "pouchdb";

/**
 * DB class for interacting with PouchDB
 * @class
 * @implements {Ezdb}
 */
class PouchStore {
  /**
   * Creates an instance of PouchStore
   */
  constructor() {
    this.db = new PouchDB(process.env.POUCHDB_NAME) || "ezdb";
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
      await this.db.put({
        _id: key,
        value: value,
      });
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
      const doc = await this.db.get(key);
      return doc.value;
    } catch (error) {
      console.error("Error getting value:", error);
      throw error;
    }
  }
}

export default PouchStore;
