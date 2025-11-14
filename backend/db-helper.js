/* Starter code - DO NOT CHANGE */
import Database from "better-sqlite3";
const FILENAME = "url.db";
const db = new Database(FILENAME);
db.exec(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        alias TEXT UNIQUE,
        url TEXT UNIQUE
    );`);



/*
Your task is to implement these functions to be used in server.js.

*/
export function findURL(alias) {
    try {
        const statement = db.prepare(...)
        const result = statement.get(...);
        return result;
    } catch (error) {
        return undefined;
    }
}

export function listURLs() {
    try {
        const results = db.prepare(...).all();
        return results;
    } catch (error) {
        return undefined;
    }
}

export function createURL(alias, url) {
    try {
        const statement = db.prepare(...);
        statement.run(...);
        return true;
    } catch (error) {
        return false;
    }
}

export function deleteURL(alias) {
    try {
        const statement = db.prepare(...);
        const result = statement.run(alias);
        return result.changes > 0;
    } catch (error) {
        return undefined;
    }
}