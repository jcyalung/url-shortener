/* DO NOT EDIT */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { parseArgs } from "./args.js";
import { Registry, Counter } from "prom-client";
import { findURL, listURLs, createURL, deleteURL } from "./db-helper.js";

const app = express();
const args = parseArgs();
const PORT = args.port;
const LOGGING = args.logging;
const FILENAME = args.database;

// Create a Registry to register the metrics
var register = null;
if (LOGGING) {
    register = new Registry();

    // TODO: add a counter for http requests and urls
    // urls have labels: url and alias.
    // http requests have labels: method, route, status_code
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// GET /metrics
app.get("/metrics", async (req, res) => {
    if (!LOGGING) {
        return res.status(404).json({ error: "Metrics endpoint not found" });
    }
    try {
        res.set("Content-Type", register.contentType);
        res.end(await register.metrics());
    } catch (error) {
        res.status(500).end(error);
    }
});


// all methods in db-helper.js are stubbed so that the code compiles. 
// you must implement these methods so that the API works.


// GET /find 
// this endpoint takes in alias to find an available url. 
// if found, the user is redirected to that url.
 
// Query: alias
// Behavior:
//     - 200 -> Successful (you do not need this; just redirect the user)
//     - 400 -> Alias parameter is not given
//     - 404 -> No URL Found
//     - 500 -> Internal Server Error
app.get("/find", (request, response) => {
    try {
        // TODO: implement this
        
        // extract alias from request query
        // if no available alias found, return a status code of 400
        // use findURL() to get the url
        const result = findURL(alias);

        // if you've found a URL in the database, return a redirect of that url
        if ("") {
            return res.redirect("");
        } else {
            // return 404
            return res.status("").json("");
        }
    } catch (error) {
        // 500 error
        return res.status("").json("");
    } finally {
        if (LOGGING) {
            // add prometheus metrics
        }
    }
});

// GET /list-urls
// this endpoint lists all urls in the database.

// Behavior:
//     - 200 -> JSON of results
//     - 500 -> Internal Server Error
app.get("/list-urls", (request, response) => {
    try {
        // TODO: implement this
        
        // use listURLs to get all urls
        const results = listURLs();
        // return success with results as data
        res.json("");
    } catch (error) {
        // 500 - internal server error
        res.status("").json("");
    } finally {
        if (LOGGING) {
            // add prometheus metrics
        }
    }
});

// POST /create-url
// this endpoint creates a url based on the alias and link request.

// Behavior:
//     - 201 -> JSON of alias and url
//     - 400 -> alias or link are not provided
//     - 500 -> internal server error
app.post("/create-url", (request, response) => {
    try {
        // TODO: implement this

        // extract link and alias from the request body
        
        // return status code of 400 if link or alias aren't provided

        const result = createURL("");
        
        // if operation is successful return 201
    } catch (error) {
        // return 500
    } finally {
        if (LOGGING) {
            // add prometheus metrics
        }
    }
});

// GET /delete/{alias}
// this endpoint deletes a database entry associated with the alias.

// Behavior:
//     - 200 -> sucesssful deletion
//     - 404 -> alias not found
//     - 500 -> internal server error
app.get("/delete/:alias", (request, response) => {
    try {
        
        // extract alias from params

        // if no alias provided, return 400

        const result = deleteUrl("");
        
        // if result is true, return 200

        // otherwise, return 404
    } catch (error) {

        // internal server error
        response.status(500).json({ error: "Internal server error", message: error.message });
    } finally {
        if (LOGGING) {
            // add prometheus metrics
        }
    }
});


// GET /
// returns a random number between 0 and 9
// if the random results in 10, throw an error
// if any queries were sent, print the queries
// Behavior:
//     - 200 -> number between 0 and 9
//     - 500 -> I ran into an error
app.get("/", (request, response) => {
    try {
        console.log("/ called")
        const result = deleteURL("s");
        console.log(result);
        const number = Math.floor(Math.random() * 10) + 1;  
        
        if(number === 10) { throw Error("I rolled a 10"); }
        if(request.query == {}) { 
            console.log(request.query); 
            const { query } = request;
            return response.json({ success: true, number, query });
        }
        return response.json({ success: true, number });
    } catch(error) {
        return response.status(500).json({error: "I ran into an error", message: error.message});
    } finally {
        if (LOGGING) {
            // add prometheus metrics
        }
    }
});

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, with database ${FILENAME}`);
    if (LOGGING) {
        console.log(`Logging is enabled, view logging in /metrics`);
    }
});
