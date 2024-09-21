import dotenv from "dotenv";
import PouchStore from "./pouch_store.js";
import ReplitStore from "./replit_store.js";
import VercelStore from "./vercel_store.js";

// Load environment variables from .env file
dotenv.config();

/**
 * @typedef {Object} Ezdb
 * @property {function(string, any): Promise<void>} set - Sets a value in the store
 * @property {function(string): Promise<any>} get - Gets a value from the store
 */

/** @type {Ezdb} */
const EzdbType = {};

/**
 * Creates and returns an Ezdb instance based on the EZDB_TYPE environment variable
 * @returns {Ezdb} An instance of PouchStore, ReplitStore, or VercelStore
 * @throws {Error} If an invalid EZDB_TYPE is provided
 */
function createDB() {
  const dbType = process.env.EZDB_TYPE || "LOCAL";

  switch (dbType) {
    case "LOCAL":
      return new PouchStore();
    case "REPLIT":
      return new ReplitStore();
    case "VERCEL":
      return new VercelStore();
    default:
      throw new Error(
        `Invalid EZDB_TYPE: ${dbType}. Valid options are LOCAL, REPLIT, or VERCEL.`
      );
  }
}

export { EzdbType as Ezdb, createDB };
