const path = require("path");
const fs = require("fs");

const express = require("express");
const mongoose = require("mongoose");

const graphqlHttp = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");

let MONGODB_URI = process.env.MONGODB_URL;

const app = express();

const delegateCorsOrigins = function (req, callback) {
  let corsOptions;
  if (process.env.DOMAIN.split(",").indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

const corsOptions = {
  delegateCorsOrigins,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const accesLog = fs.createWriteStream(path.join(__dirname, "acces.log"), {
  flags: "a",
});

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(compression());
app.use(morgan("combined", { stream: accesLog }));

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: false,
    formatError(err) {
      if (!err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || "An error occurred.";
      const code = err.originalError.code || 500;
      return { message: message, status: code, data: data };
    },
  })
);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.MONGODB_NAME,
  })
  .then((result) => {
    app.listen(process.env.PORT || 3001);
  })
  .catch((err) => {
    console.log(err);
  });
