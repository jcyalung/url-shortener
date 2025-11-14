/* Starter code - DO NOT CHANGE */
import Database from "better-sqlite3";
const FILENAME = "url.db";
const db = new Database(FILENAME);
db.exec(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        alias TEXT UNIQUE,
        url TEXT UNIQUE
    );`
);

// Implement the methods to be used in our API calls.
// All methods have starter code that you can go off of.
// All methods have a CRUD operation on the users table.
// If you are unfamiliar with SQL language, feel free to ask for help.


/**
 * Returns a url with the associated alias.
 * @param {String} alias 
 * @returns {undefined | String} url, or undefined if not found
 */
export function findURL(alias) {
    try {
        // TODO: implement this

        // prepare a statement to find the associated url
        const statement = db.prepare(...)

        // return 1 row
        const result = statement.get(...);
        return result;
    } catch (error) {
        return undefined;
    }
}

/**
 * Returns all urls in the database
 * @returns {Array | undefined} list of all urls, undefined if none
 */
export function listURLs() {
    try {
        // prepare a statement to select all urls
        const results = db.prepare(...).all();

        // return the results
        return results;
    } catch (error) {
        return undefined;
    }
}

/**
 * Creates a new alias with a url, stored in the database.
 * @param {String} alias 
 * @param {String} url 
 * @returns {boolean} true if url was created, false otherwise
 */
export function createURL(alias, url) {
    try {
        // TODO: implement this

        // prepare a statement to insert a row into the table
        const statement = db.prepare(...);
        statement.run(...);
        return true;
    } catch (error) {
        return false; 
    }
} 

/**
 * 
 * @param {String} alias 
 * @returns {boolean | undefined} true if deleted, false if none found
 */
export function deleteURL(alias) {
    try {
        // TODO: implement this
        
        // prepare a statement to delete a row from the table
        const statement = db.prepare(...);
        const result = statement.run(...);

        // return true if changes were made
        return result.changes > 0;
    } catch (error) {
        return undefined;
    }
}