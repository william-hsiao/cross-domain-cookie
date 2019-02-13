# Cross-Domain Cookie

1) npm install
2) node .

This will start an express server. On a website hosted across http, run the following lines of code in the console:

```js
const cdcScript = document.createElement('script');
cdcScript.setAttribute("src", "http://localhost:3001/script.js");
document.body.appendChild(cdcScript);
cdc.initSender();
```

To send a message, use `cdc.send( STRINGIFIED JSON OBJECT )`

The message will be logged in your terminal.
