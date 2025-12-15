/* Starter code - DO NOT CHANGE */
import Database from "better-sqlite3";


// Implement the methods to be used in our API calls.
// All methods have starter code that you can go off of.
// All methods have a CRUD operation on the users table.
// If you are unfamiliar with SQL language, feel free to ask for help.
// All functions are stubbed so that the program can run.


/**
 * Creates a new SQLite table called 'urls' with the columns: link, alias, timestamp, and id.
 * @param {string} filename - database filename
 */
export function createTable(filename) {
    let dbInstance;
    try {
        dbInstance = new Database(filename);
        dbInstance.exec(`
            CREATE TABLE IF NOT EXISTS urls (
                link VARCHAR(255),
                alias VARCHAR(50),
                timestamp DATETIME NOT NULL,
                id INTEGER PRIMARY KEY AUTOINCREMENT
            );
        `);
    } catch (e) {
        console.error(e);
    } finally {
        if (dbInstance) {
            dbInstance.close();
        }
    }
}

export function existsTable(filename) {
    let dbInstance;
    try {
        dbInstance = new Database(filename);
        const result = dbInstance.prepare("SELECT COUNT(*) AS count FROM sqlite_master WHERE type='table' AND name='urls'").get();
        return result !== undefined;
    } catch (e) {
        console.error(e);
    } finally {
        if (dbInstance) {
            dbInstance.close();
        }
    }
}


/**
 * Returns a url with the associated alias.
 * @param {String} filename
 * @param {String} alias 
*/
export function findURL(filename, alias) {
    try {
        // TODO: implement this
        return undefined;
    } catch (error) {
        return undefined;
    }
}

/**
 * Returns all urls in the database
 * @param {String} filename
 * @returns {Array | undefined} list of all urls, undefined if none
 */
export function listURLs(filename) {
    try {
        // TODO: implement this
        return undefined;
    } catch (error) {
        return undefined;
    }
}

/**
 * Creates a new alias with a url, stored in the database with the current time it was stored.
 * @param {String} alias 
 * @param {String} url 
 * @returns {boolean} true if url was created, false otherwise
 */
export function createURL(filename, alias, url) {
    try {
        // TODO: implement this
        return undefined;
    } catch (error) {
        return false; 
    }
} 

/**
 * 
 * @param {String} alias 
 * @returns {boolean | undefined} true if deleted, false if none found
 */
export function deleteURL(filename, alias) {
    try {
        // TODO: implement this
        return undefined;
    } catch (error) {
        return undefined;
    }
}