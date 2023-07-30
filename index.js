import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(express.static('public'));
// Serve static files from the 'public' directory (adjust the directory name as needed)
// If you are using a local development server, you'll need to set it up to serve video files with the correct MIME type. Since you mentioned that you are using port 3000, I'll assume you are using a Node.js server with Express.

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/check', (req, res) => {
    console.log(req.body);

    const password = req.body['password'];

    if (password === "1") {
        res.sendFile(__dirname + "/public/secret.html");
    } else (res.sendFile(__dirname + "/public/index.html"));
});


app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
  });

app.listen(port, () => {
    console.log(`listening on ${port}`);
});