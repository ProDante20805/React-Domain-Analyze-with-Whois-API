const express = require("express");
const dataRoutes = require("./routes/data.js");
const bodyParser = require('body-parser')
const cors = require('cors')

const app=express();

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/data", dataRoutes);

app.get("/", (req, res) => {
    res.send("server is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
