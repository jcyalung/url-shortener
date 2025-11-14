# Frontend

- Install the packages by running:
```zsh
npm i
```
- Run the frontend using the following command:
```zsh
npm run dev
```

You will learn the basics of React and how to implement some functionalities unique to React frameworks. You can read the documentation and learn more about it [**here**](https://react.dev/learn).

There are 4 files that you will need to edit for the frontend:
- `HomePage.jsx`
- `ShortenPage.jsx`
- `URLPage.jsx`
- `AliasRedirect.jsx`

## `HomePage.jsx`
The landing page for all users that join the website. The homepage consists of:

- A description of what the website does
- Buttons to the shortener page and the URLs page
- Credits

You may design the webpage in any way you like.

## `ShortenPage.jsx`
The page that allows users to shorten their URLs. The shortener page consists of:
- An input box to enter a URL
- A button to confirm to shorten the URL
- A message confirming the url was shortened, including:
    - The link to the new shortened url (because it's in localhost, it should just be `http://localhost:5173/:alias`)
    - If an error occurred, show the error message instead.
- The page will call your API to create the url.

Hint: There is one React Hook that you will need for the message and input. What Hook is it?

## `URLPage.jsx`
The page that shows all the URLs that the database currently has. The URL page consists of:
- A table, **dynamically** generated of all the urls. The table's columns are:
    - ID (number)
    - URL (string)
    - alias (string)
- If there are no urls, display a text label saying "No URLs yet".
- When clicking on a URL, the browser opens a new window navigating to that URL.
- Add a button for each row, where if clicked, the URL is deleted from the database.
    - You will need to call the API for this.
- The page will call your API to list all the URLs.

Hint: You will need 2 React Hooks for this page.

## `AliasRedirect.jsx`
This element is more of a middleware instead of a page. This handles all the aliases that the user inputs. The element consists of:
- Checking if an alias exists in the table
    - If so, redirect them to the URL associated with the alias
    - If not, show on the page that an alias was not found
