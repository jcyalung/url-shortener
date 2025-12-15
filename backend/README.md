# Backend

- Install the packages using:
```zsh
npm i
```
- Run the backend using the following command:
```zsh
node server.js
```

- If you are also developing Prometheus, please add the argument `--logging` or `-l` in your command.

There are 2 files that you will need to edit for in order for the program to work:
- `server.js`
- `db-helper.js`

## `server.js`
Responsible for the API that we'll use to shorten URLs. The RESTful API is written with `Express.js` and uses port 3000. Your task is to implement the following endpoints:

1. `GET /find`
2. `GET /list-urls`
3. `POST /create-url`
4. `GET /delete/:alias`

You can read the documentation about Express [**here**](https://expressjs.com/).

## `db-helper.js`
Responsible for managing the database used in our API. The database is a SQLite database using the `better-sqlite3` library. Your task is to implement the following functions:
1. `findURL()`
2. `listURLs()`
3. `createURL()`
4. `deleteURL()`

You can read the documentation about better-sqlite3 [**here**](https://github.com/WiseLibs/better-sqlite3).

## Prometheus Metrics
Prometheus metrics allow us to track certain variables in our program. You will need to write code to track metrics such as:
- urls (url, alias)
- http requests (method, route, status_code)

## Recommended Workflow
1. Complete `db-helper.js`.
2. Complete API calls for `server.js`.
3. Complete the Prometheus metrics for `server.js`.
# Helpers/Hints

## SQL and Table Existence
`sqlite` is how we store our urls in a database for users to shorten their urls. Sqlite mainly uses SQL (Structured Query Language) to perform CRUD operations (Create, Read, Update, Delete) and is what will be written in `db-helper.js`. 

A database is a file that consists of tables that holds rows of data. 
- Tables have a name with a structure that **cannot** be modified. For example,
    - The database we use for this project includes a table called `urls` with the following rows:
        - `link`, datatype: `VARCHAR(255)` <-- this means it can hold a maximum string of 255 characters.
        - `alias`, datatype: `VARCHAR(255)`
        - `timestamp`, datatype: `DATETIME NOT NULL` <-- usually 'YYYY-MM-DD hh:mm:ss'
        - `id`, datatype: `INTEGER`
            - notice in `db-helper.js` that this is also defined with `PRIMARY KEY AUTOINCREMENT`. You will not need to worry about this as primary keys are beyond the scope of the learning targets, but they are useful when creating relations across tables.

**It is important that a `urls` table is defined in our database!** In every function in `db-helper.js`, you should check first if the table exists. If it doesn't, you can call `createTable` to create it for you.

Because this project will have you write SQL, here are some useful statements that you may use in your code:

- `SELECT columns FROM table WHERE condition`
    - will display n rows from the table that fit the condition.
    - use `*` if you would like to display all columns.
    - example: `SELECT location, age FROM users WHERE name = 'Josh'`
        - displays the location and age of all users whose name is Josh.
- `INSERT INTO table (columns) VALUES (values)`
    - inserts a row into the table with column = value respectively.
        - example: `INSERT INTO users (name, location, age) VALUES ("Josh", "Santa Ana", 21)`
            - inserts a row into users, where name="Josh", location="Santa Ana", and age=21.
            - **IMPORTANT**: if a column has a `NOT NULL` clause, you must add that column and value into your insert statement.
- `DELETE FROM table WHERE condition`
    - deletes all rows in the table where the condition is met.
        - example: `DELETE FROM users WHERE age = 20`
            - deletes all rows where the age is equal to 20.

## Prometheus

Prometheus allows us to instrument our applications, monitoring specific values in our program.
Specifically for URL shortener, we want to see the amount of URLs or HTTP requests that are created. The way we do this is by defining a registry in prometheus that tracks these custom metrics.

### Example
I want to track the number of messages sent in my program. After defining my registry, I make a counter variable called messageTotal like so:
```javascript
var messageTotal = new Counter({
    name: 'message_total',
    help: 'Total number of messages',
    labelNames: ['sender', 'message'],
    registers: [register]
});
```

Then when a message is sent, I add this piece of code to increase the counter:
```javascript
messageTotal.inc({ sender: "Josh", message: "hello" });
```
Then when I check the `/metrics` page, I should see the following:

```
# HELP message_total Total number of messages
# TYPE message_total counter
message_total{sender="Josh",message="hello"} 1
```