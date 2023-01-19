const PORT = 3000;

//npm;
import express from "express";
import path from "node:path";
import bodyParser from "body-parser";

//functions;
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { mongoConnect } from "./scripts/mongoConnect.js";

//routes;
import { main } from "./routes/main.js";
import { user } from "./routes/user.js";

const app = express();

mongoConnect("admin", "admin", "password");

const __dirname = dirname(fileURLToPath(import.meta.url));

//body parser initializing;
app.use(bodyParser.urlencoded({ extended: true }));

//ejs settings;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//set static files path;
app.use(express.static(path.join(__dirname, "public")));

//system route;
app.use("/main", main); 
app.use("/user", user);

app.listen(PORT, e => {
    if (e) throw e;
    console.log(`Server listening on port ${PORT}...`);
});