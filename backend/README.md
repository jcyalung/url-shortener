# Backend

- Install the packages using:
```zsh
npm i
```
- Run the backend using the following command:
```zsh
node server.js
```

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
