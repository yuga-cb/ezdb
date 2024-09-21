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
    const dbName = process.env.POUCHDB_NAME || "ezdb";
    this.db = new PouchDB(dbName);
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
      const existingDoc = await this.db.get(key).catch((err) => {
        if (err.name === "not_found") {
          return { _id: key };
        }
        throw err;
      });

      const updatedDoc = {
        ...existingDoc,
        value: value,
      };

      await this.db.put(updatedDoc);
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
      if (error.name === "not_found") {
        return null;
      }
      console.error("Error getting value:", error);
      throw error;
    }
  }
}

export default PouchStore;
