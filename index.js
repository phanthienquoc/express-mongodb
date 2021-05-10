import bodyParser from "body-parser";
import express from "express";

import mongoose from "mongoose";

import routes from "./src/routes/cmRoutes";

const app = express();

const PORT = 4000;

// mongoose connection 
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


routes(app);

// serve static files
app.use(express.static('public'))

app.get("/", (req, res) => {
    console.log(PORT)
})

app.listen(PORT, () => {
    console.log(PORT)
})