# EZDB

EZDB is a simple, flexible database abstraction layer that supports multiple storage backends.
It is most useful for code that is intended to be deployed across multiple hosting environments (e.g. Replit, Vercel, etc.) without modification.

## Installation

```bash
npm install @yuga-cb/ezdb
```

## Configuration

EZDB uses an environment variable `EZDB_TYPE` to determine which storage backend to use. Valid options are:

- `LOCAL` (default): Uses PouchDB for local storage
- `REPLIT`: Uses Replit's key-value store
- `VERCEL`: Uses Vercel KV storage

Set the `EZDB_TYPE` environment variable before running your application:

```bash
EZDB_TYPE=REPLIT
```

Optional environment variables:

**When `EZDB_TYPE=LOCAL`:**
- `POUCHDB_NAME`: The name of the PouchDB database (default: `ezdb`)

## Usage
```javascript
javascript
import createDB from 'ezdb';
const db = createDB();
// Set a value
await db.set('key', 'value');
// Get a value
const value = await db.get('key');
console.log(value); // 'value'
```

