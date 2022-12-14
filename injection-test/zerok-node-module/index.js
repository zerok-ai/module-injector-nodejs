setTimeout(() => {
  const process = require("node:process");
  console.log(process.argv, process.pid);

  process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log("uncaughtExceptionMonitor");
    console.log(err, origin);
  });

  console.log("Started");
}, 100);

const zerokMiddleware = function (req, res, next) {
  console.log("LOGGED");
  next();
};

const zerokErrorHandler = function (err, req, res, next) {
  console.error(err.stack)
  next();
}

const express = function(args) {
    const express = require("express_real");
    const app = express(args);
    app.use(zerokMiddleware);
    app.use(zerokErrorHandler);
    return app;
};

module.exports = express;