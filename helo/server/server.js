require("dotenv").config();
const express = require("express");
const app = express();
const { PORT,CONNECTION_STRING } = process.env;
const massive = require("massive");

app.use(express.json());

// massive
massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    app.listen(PORT, () => {
      console.log(`Push it to the limit ${PORT}`);
    });
  });

//endpoints








